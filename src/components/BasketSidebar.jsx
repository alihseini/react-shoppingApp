import styles from "./BasketSideBar.module.css";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineNumbers } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";

function BasketSidebar({ state, buttonHandler }) {
  console.log(state);
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
      <button onClick={()=>buttonHandler("CHECKOUT")}>Checkout</button>
    </div>
  );
}

export default BasketSidebar;
