import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import FavPage from "./pages/FavPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="fav" element={<FavPage />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);