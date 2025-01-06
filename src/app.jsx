import { Routes, Route } from "react-router";
import { NewProduct } from "./pages/new-product";
import { ListProduct } from "./pages/list-product";
import { ProductDetail } from "./pages/product-detail";
import { Home } from "./pages/home";
import { BaseTemplate } from "./templates";

import { NestComponent } from "./pages/nest-component"
import { useDispatch, useSelector } from "react-redux";

import { changeColor } from "./redux/color.slice"

export function App() {
  return (
    <>
      <Routes>
        {/* Route nesting */}
        {/* 1. Sử dụng chungg template. (Không cần path) */}
        <Route element={<BaseTemplate />}>
        <Route index element={<Home />} />
          <Route path="new-product" element={<NewProduct />}>New Products</Route>
          <Route path="list-product" element={<ListProduct />}>Products List</Route>
          <Route path="/product/:id" element={<ProductDetail />}>Products Detail</Route>
        </Route>
      </Routes>

      <Routes>
        <Route path="nest-component" element={<NestComponent />}>Rest Component</Route>
      </Routes>
    
      <ChangeColor />
    </>
  );
}


function ChangeColor() {

  const color = useSelector((store) => {
    return store.colorReducer.current;
  });


  const dispatch = useDispatch();

  return (
    <>
    <div
    className="w-[100px] h-[100px]"
    style={{
      backgroundColor: color,
    }}
    >
    </div>

    <button
    onClick={() => {
      dispatch(changeColor("red"))
    }}
    >Red</button>
    <br />
    <button
    onClick={() => {
      dispatch(changeColor("blue"))
    }}>Blue</button>
    <br />
    <button
    onClick={() => {
      dispatch(changeColor("green"))
    }}
    >Green</button>
    
    </>
  );
}