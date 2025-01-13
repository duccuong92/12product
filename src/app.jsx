import { Routes, Route } from "react-router";
import { NewProduct } from "./pages/new-product";
import { ListProduct } from "./pages/list-product";
import { ProductDetail } from "./pages/product-detail";
import { Home } from "./pages/home";
import { BaseTemplate } from "./templates";

import { NestComponent } from "./pages/nest-component";
import { useDispatch, useSelector } from "react-redux";

import { changeColor } from "./redux/color.slice";
import { tangFontSize, giamFontSize } from "./redux/font-size.slice";
import { useState } from "react";
import { tangValue } from "./redux/counter.slice";

import { ComponentContext } from "../src/context";
import { ThemeProvider } from "./context";

import { useCount } from "./hooks/count.hook"

export function App() {
  const { count, handleInc } = useCount;

  return (
    <>
      <Routes>
        {/* Route nesting */}
        {/* 1. Sử dụng chungg template. (Không cần path) */}
        <Route element={<BaseTemplate />}>
          <Route index element={<Home />} />
          <Route path="new-product" element={<NewProduct />}>
            New Products
          </Route>
          <Route path="list-product" element={<ListProduct />}>
            Products List
          </Route>
          <Route path="/product/:id" element={<ProductDetail />}>
            Products Detail
          </Route>
        </Route>
      </Routes>

      <Routes>
        <Route path="nest-component" element={<NestComponent />}>
          Rest Component
        </Route>
      </Routes>

      <ChangeColor />
      <br />
      <br />
      <TangGiamFontSize />

      <br />
      <br />
      <Count />
      <br />
      <Count />
      <br />
      <Count />
      <br />
      <br />
      <ThemeProvider>
        <ComponentContext />
        <hr />
        <ComponentContext />
        <hr />
        <ComponentContext />
      </ThemeProvider>

      <br />
      <br />
      <button
      onClick={handleInc}>{count}</button>
      <A />
    </>
  );
}


function useA() {
  const { count, handleDesc, handleInc } = useCount();

  return (
    <>
    <div>
      <p>count: {count}</p>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDesc}>Desc</button>
    </div>
    </>
  )
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
      ></div>

      <button
        onClick={() => {
          dispatch(changeColor("red"));
        }}
      >
        Red
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(changeColor("blue"));
        }}
      >
        Blue
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(changeColor("green"));
        }}
      >
        Green
      </button>
    </>
  );
}

function TangGiamFontSize() {
  const dispatch = useDispatch();
  const fz = useSelector((store) => store.fontSizeReducer.fz);
  return (
    <>
      <button
        onClick={() => {
          dispatch(tangFontSize(2));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(giamFontSize(2));
        }}
      >
        -
      </button>

      <p
        style={{
          fontSize: fz,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        pariatur?
      </p>
    </>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  const countGlobal = useSelector((store) => store.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
        className="m-4 p-4 border border-red-500 rounded"
      >
        Local State: {count}
      </button>

      <button
        onClick={() => {
          dispatch(tangValue());
        }}
        className="m-4 p-4 border border-red-500 rounded"
      >
        Global State: {countGlobal}
      </button>
    </>
  );
}
