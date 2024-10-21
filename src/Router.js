import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Error from "./pages/Error";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Details />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRouter;
