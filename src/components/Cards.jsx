import { shortenTitle } from "../helpers/shortenTitle";
import styles from "./Cards.module.css";
import {
  MdOutlineShoppingCart,
  MdOutlineMedicalInformation,
} from "react-icons/md";

function Cards({ data: { image, title, price } }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="product image" />
      <div className={styles.details}>
        <p>{shortenTitle(title)}</p>
        <span>{price} $</span>
      </div>
      <div className={styles.buttons}>
        <button>
          <MdOutlineMedicalInformation />
        </button>
        <button>
          <MdOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}

export default Cards;
