import React from "react";
import { useRef } from "react";
import { useGlobalContext } from "../context";

function SearchForm() {
    const { searchTerm, setSearchTerm } = useGlobalContext();
    const searchRef = useRef();
    const searchCocktail = () => {
        setSearchTerm(searchRef.current.value);
    };
    React.useEffect(() => {
        searchRef.current.focus();
    });

    return (
        <section className="section">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="input">
                        search for your favorite cocktail
                    </label>
                    <input
                        id="input"
                        type="text"
                        ref={searchRef}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    );
}

export default SearchForm;
