import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import styles from "./CheckoutPage.module.css";
import { IoMdBackspace } from "react-icons/io";
import BasketSidebar from "../components/BasketSidebar";
import useTitle from "../hooks/useTitle";
import { useSelector } from "react-redux";

function CheckoutPage() {
  useTitle("Checkout");
  const state = useSelector((store) => store.cart);

  return (
    <div className={styles.container}>
      {state.selectedItems.length === 0 ? (
        <div className={styles.empty}>
          <p>Empty!</p>
          <Link to="/products" className={styles.button}>
            <IoMdBackspace /> Back
          </Link>
        </div>
      ) : (
        <>
          <BasketSidebar state={state} />
          <div className={styles.basketCards}>
            {state.selectedItems.map((item) => (
              <BasketCard key={item.id} data={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
