import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ItemPage from "./pages/ItemPage";
import PageNotFound from "./pages/PageNotFound";
import ProductsProvider from "./context/ProductsContext";
import CartProvider from "./context/CartContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route index element={<Navigate to="/Products" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/products/:id" element={<ItemPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
