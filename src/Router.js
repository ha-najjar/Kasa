import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import About from "./pages/About"; // Import de la page About
import Error from "./pages/Error";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Details />} />
      <Route path="/about" element={<About />} />{" "}
      {/* Nouvelle route pour la page À propos */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;
