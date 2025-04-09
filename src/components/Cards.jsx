import { quantityHandler, shortenTitle } from "../helpers/helper";
import styles from "./Cards.module.css";
import {
  MdOutlineShoppingCart,
  MdOutlineMedicalInformation,
} from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItem,
  increaseItem,
  removeItem,
} from "../features/cart/cartSlice";

function Cards({ data }) {
  const { image, title, price, id } = data;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const quantity = quantityHandler(state, id);

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
            <button onClick={() => dispatch(removeItem(data))}>
              <IoTrashBinOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(decreaseItem(data))}>
              <CiCircleMinus />
            </button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <MdOutlineShoppingCart />
            </button>
          ) : (
            <button onClick={() => dispatch(increaseItem(data))}>
              <CiCirclePlus />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
