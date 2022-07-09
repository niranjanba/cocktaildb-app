import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const AppContext = createContext();

const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("a");
    const [cocktails, setCocktails] = useState([]);

    const fetchCocktails = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}${searchTerm}`);
            const { drinks } = await res.json();
            if (drinks) {
                setCocktails(
                    drinks.map((drink) => {
                        const {
                            idDrink,
                            strAlcoholic,
                            strGlass,
                            strDrinkThumb,
                            strDrink,
                        } = drink;
                        return {
                            id: idDrink,
                            image: strDrinkThumb,
                            name: strDrink,
                            glass: strGlass,
                            info: strAlcoholic,
                        };
                    })
                );
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCocktails();
    }, [searchTerm]);

    return (
        <AppContext.Provider
            value={{ loading, searchTerm, cocktails, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppProvider;
