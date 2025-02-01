import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ItemPage from "./pages/ItemPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/Products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/products/:id" element={<ItemPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
