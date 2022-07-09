import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <section className="section error-page">
            <h3>Oops! you shouldn't have come here.</h3>
            <Link to="/" className="btn">
                go home
            </Link>
        </section>
    );
}

export default Error;
