import HomePage from "../src/Pages/HomePage/HomePage";
import Detail from "../src/Pages/Detail/Detail";
import NotFound from "../src/Pages/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesCard from "../src/Pages/FavoutiresCard/FavouritesCard";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:movie" element={<Detail />} />
          <Route path="/favourites" element={<FavouritesCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
