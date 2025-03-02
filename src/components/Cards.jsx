import { useCart } from "../context/CartContext";
import { quantityHandler, shortenTitle } from "../helpers/helper";
import styles from "./Cards.module.css";
import {
  MdOutlineShoppingCart,
  MdOutlineMedicalInformation,
} from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";

function Cards({ data }) {
  const { image, title, price, id } = data;
  const [state, dispatch] = useCart();

  const quantity = quantityHandler(state, id);

  const addHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt="product image" />
      <div className={styles.details}>
        <p>{shortenTitle(title)}</p>
        <span>{price} $</span>
      </div>
      <div className={styles.buttons}>
        <div>
          <Link to={`/products/${id}`} className={styles.detailButton}>
            <MdOutlineMedicalInformation />
          </Link>
        </div>
        <div className={styles.rightSideButtons}>
          {quantity === 1 && (
            <button onClick={() => addHandler("REMOVE_ITEM")}>
              <IoTrashBinOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => addHandler("DECREASE_ITEM")}>
              <CiCircleMinus />
            </button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => addHandler("ADD_ITEM")}>
              <MdOutlineShoppingCart />
            </button>
          ) : (
            <button onClick={() => addHandler("INCREASE_ITEM")}>
              <CiCirclePlus />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
