import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cinema from "./pages/Cinema";
import About from "./pages/About";
import { YelmoSc } from "./pages/YelmoSc";
import YelmoOr from "./pages/YelmoOr";
import Multicines from "./pages/Multicines";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cinema" element={<Cinema/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/santacruz" element={<YelmoSc/>}></Route>
        <Route path="/santacruz" element={<YelmoSc/>}></Route>
        <Route path="/orotava" element={<YelmoOr/>}></Route>
        <Route path="/multicines" element={<Multicines/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
