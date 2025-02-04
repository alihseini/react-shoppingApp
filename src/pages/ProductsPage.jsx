import Cards from "../components/Cards";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";
import styles from "./ProductsPage.module.css";

function Products() {
  const productsData = useProducts();
  return (
    <>
      {!productsData.length ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <div className={styles.productsData}>
            {productsData.map((p) => (
              <Cards data={p} key={p.id} />
            ))}
          </div>
          <div className={styles.filters}>filters</div>
        </div>
      )}
    </>
  );
}

export default Products;
