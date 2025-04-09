import { shortenTitle } from "../helpers/helper";
import styles from "./BasketCard.module.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../features/cart/cartSlice";

function BasketCard({ data }) {
  const { image, price, title, quantity } = data;
  const dispatch = useDispatch();

  return (
    <div className={styles.eachCard}>
      <img src={image} alt="product-image" />
      <h3>{shortenTitle(title)}</h3>
      <span>{price} $</span>
      <div className={styles.buttons}>
        {quantity === 1 ? (
          <button onClick={() => dispatch(removeItem(data))}>
            <IoTrashBinOutline />
          </button>
        ) : (
          <button onClick={() => dispatch(decreaseItem(data))}>
            <CiCircleMinus />
          </button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increaseItem(data))}>
          <CiCirclePlus />
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
