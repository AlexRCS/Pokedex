import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import TypesPage from "./types";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:type" element={<TypesPage />} />
      </Routes>
    </Router>)
}

export default  AppRoutes; 



