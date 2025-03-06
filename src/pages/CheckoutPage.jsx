import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";
import styles from "./CheckoutPage.module.css";
import { IoMdBackspace } from "react-icons/io";
import BasketSidebar from "../components/BasketSidebar";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const buttonHandler = (type, payload) => {
    dispatch({ type, payload });
  };

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
          <BasketSidebar state={state} buttonHandler={buttonHandler} />
          <div className={styles.basketCards}>
            {state.selectedItems.map((item) => (
              <BasketCard
                key={item.id}
                data={item}
                buttonHandler={buttonHandler}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
