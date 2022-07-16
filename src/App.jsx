import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Amd } from "./pages/amd/Amd";
import { Intel } from "./pages/intel/Intel";
import { PcArmada } from "./pages/pcarmada/PcArmada";
import { Productos } from "./pages/productos/Productos";
import { Footer } from "./components/footer/Footer";

const ItemDetailContainer = lazy(() =>
  import("./components/itemDetailContainer/ItemDetailContainer")
);

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
        <Route
          path="Producto/:idProduct"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <ItemDetailContainer />
            </Suspense>
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
