import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts(await api.get("products"));
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={Products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const allProducts = useContext(ProductsContext);
  return allProducts;
};

const useProductDetail = (id) => {
  const allProducts = useContext(ProductsContext);
  const productData = allProducts.find((item) => item.id === id);
  return productData;
};

export default ProductsProvider;
export { useProducts, useProductDetail };
