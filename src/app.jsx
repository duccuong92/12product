import { Routes, Route } from "react-router";
import { NewProduct } from "./pages/new-product";
import { ListProduct } from "./pages/list-product";
import { ProductDetail } from "./pages/product-detail";
import { Home } from "./pages/home";
import { BaseTemplate } from "./templates";

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
    
    </>
  );
}
