import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/cocktaildb-app/" element={<Home />} />
                <Route path="/cocktaildb-app/about" element={<About />} />
                <Route
                    path="/cocktaildb-app/cocktail/:id"
                    element={<SingleCocktail />}
                />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
