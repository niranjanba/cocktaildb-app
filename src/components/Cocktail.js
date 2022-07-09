import { Link } from "react-router-dom";

function Cocktail({ id, image, info, glass, name }) {
    return (
        <article key={id} className="cocktail">
            <img src={image} className="cocktail-image" alt={name} />
            <div className="cocktail-footer">
                <h2 className="cocktail-title">{name}</h2>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link className="btn" to={`/cocktaildb-app/cocktail/${id}`}>
                    Details
                </Link>
            </div>
        </article>
    );
}

export default Cocktail;
