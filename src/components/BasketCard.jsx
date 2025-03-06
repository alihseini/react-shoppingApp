import { shortenTitle } from "../helpers/helper";
import styles from "./BasketCard.module.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function BasketCard({ data, buttonHandler }) {
  const { image, price, title, quantity } = data;

  return (
    <div className={styles.eachCard}>
      <img src={image} alt="product-image" />
      <h3>{shortenTitle(title)}</h3>
      <span>{price} $</span>
      <div className={styles.buttons}>
        {quantity === 1 ? (
          <button onClick={() => buttonHandler("REMOVE_ITEM", data)}>
            <IoTrashBinOutline />
          </button>
        ) : (
          <button onClick={() => buttonHandler("DECREASE_ITEM", data)}>
            <CiCircleMinus />
          </button>
        )}
        <span>{quantity}</span>
        <button onClick={() => buttonHandler("INCREASE_ITEM", data)}>
          <CiCirclePlus />
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
