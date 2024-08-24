import HomePage from "../src/Pages/HomePage";
import Detail from "../src/Pages/Detail";
import NotFound from "../src/Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
