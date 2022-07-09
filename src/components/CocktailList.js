import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

function CocktailList() {
    const { cocktails, loading } = useGlobalContext();
    if (loading) {
        return <Loading />;
    }
    if (cocktails.length < 1) {
        return (
            <section className="section">
                <h3>No Cocktail Found With The Given Name</h3>
            </section>
        );
    }
    return (
        <section className="section cocktails">
            <h2>Cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map((cocktail, index) => {
                    return <Cocktail key={index} {...cocktail} />;
                })}
            </div>
        </section>
    );
}

export default CocktailList;
