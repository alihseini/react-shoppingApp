import styles from "./BasketSideBar.module.css";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineNumbers } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import { useDispatch } from "react-redux";
import { checkOut } from "../features/cart/cartSlice";

function BasketSidebar({ state }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <p>
          <IoIosPricetags /> Total Price:
        </p>
        <span>{state.totalPrice} $</span>
      </div>
      <div>
        <p>
          <MdOutlineNumbers /> Quantity:
        </p>
        <span>{state.itemCounter}</span>
      </div>
      <div>
        <p>
          <GrStatusGood /> Status:
        </p>
        <span>Pending...</span>
      </div>
      <button onClick={() => dispatch(checkOut())}>Checkout</button>
    </div>
  );
}

export default BasketSidebar;

