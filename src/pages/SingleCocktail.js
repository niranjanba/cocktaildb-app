import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const api = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function SingleCocktail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);
    useEffect(() => {
        setLoading(true);
        const getCocktail = async () => {
            try {
                const res = await fetch(`${api}${id}`);
                const { drinks } = await res.json();
                if (drinks.length > 0) {
                    const {
                        strDrink: name,
                        strGlass: glass,
                        strDrinkThumb: image,
                        strInstructions: instructions,
                        strAlcoholic: alcoholic,
                        strCategory: category,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = drinks[0];

                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ];

                    const newCocktail = {
                        name,
                        glass,
                        image,
                        instructions,
                        alcoholic,
                        category,
                        ingredients,
                    };

                    setCocktail(newCocktail);
                    setLoading(false);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                setLoading(false);
            }
        };
        getCocktail();
    }, [id]);
    if (loading) {
        return <Loading />;
    }
    if (!cocktail) {
        return <h2>No Cocktail</h2>;
    }
    const {
        name,
        glass,
        image,
        instructions,
        alcoholic,
        category,
        ingredients,
    } = cocktail;
    return (
        <section className="section cocktail-section">
            <h2 className="section-title">{name}</h2>
            <Link to={"/"} className="btn btn-primary">
                go home
            </Link>
            <div className="drink">
                <img src={image} alt={name} />
                <div className="drink-data">
                    <p>
                        <span className="drink-info">name : </span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-info">Glass : </span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-info">category : </span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-info">alcoholic : </span>
                        {alcoholic}
                    </p>
                    <p>
                        <span className="drink-info">instructions : </span>
                        {instructions}
                    </p>
                    <p>
                        <span className="drink-info">ingredients: </span>
                        {ingredients.map((item, index) => {
                            return item ? (
                                <span key={index}>{item},</span>
                            ) : null;
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SingleCocktail;
