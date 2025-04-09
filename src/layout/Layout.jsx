import { FaShoppingBag } from "react-icons/fa";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products" className={styles.homePage}>
          <h1>Shopping App</h1>
        </Link>
        <Link to="/checkout" className={styles.cartButton}>
          <FaShoppingBag />
          <span
            className={
              state.itemCounter === 0 ? styles.none : styles.itemCounter
            }
          >
            {state.itemCounter}
          </span>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>Developed By Ali Hosseini</footer>
    </>
  );
}

export default Layout;

