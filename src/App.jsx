import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";

import { Route, Routes } from "react-router-dom";
import { Amd } from "./pages/amd/Amd";
import { Intel } from "./pages/intel/Intel";
import { PcArmada } from "./pages/pcarmada/PcArmada";
import { Productos } from "./pages/productos/Productos";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Productos" element={<Productos />}></Route>
        <Route path="Amd" element={<Amd />}></Route>
        <Route path="Intel" element={<Intel />}></Route>
        <Route path="PcArmada" element={<PcArmada />}></Route>
      </Routes>
    </>
  );
}

export default App;
