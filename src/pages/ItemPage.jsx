import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../features/products/productsDataSlice";
import { shortenTitle } from "../helpers/helper";
import Loader from "../components/Loader";
import { TbCategoryMinus } from "react-icons/tb";
import { IoMdPricetag, IoMdBackspace } from "react-icons/io";
import styles from "./ItemPage.module.css";
import useTitle from "../hooks/useTitle";
import { useEffect } from "react";

function ItemPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);
  const productData = useSelector((store) =>
    store.productsData.productsData.find((i) => i.id === +id)
  );

  useTitle(shortenTitle(productData?.title||"Loading..."));

  return (
    <div className={styles.container}>
      {!productData ? (
        <Loader />
      ) : (
        <>
          <img src={productData.image} alt="product image" />
          <div className={styles.info}>
            <h2>{productData.title}</h2>
            <p>{productData.description}</p>
            <div className={styles.category}>
              <TbCategoryMinus />
              {productData.category}
            </div>
            <div className={styles.price}>
              <IoMdPricetag />
              {productData.price}
            </div>
            <Link to="/products" className={styles.button}>
              <IoMdBackspace /> Back
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemPage;
