import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import styles from "./ProductsPage.module.css";
import {
  categoryFilter,
  getInitialQuery,
  searchFilter,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import Search from "../components/Search";
import SideBar from "../components/SideBar";
import useTitle from "../hooks/useTitle";
import { fetchProductsData } from "../features/products/productsDataSlice";

function Products() {
  useTitle("Shopping App");
  const { productsData, loading } = useSelector((store) => store.productsData);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);

  useEffect(() => {
    setFilteredData(productsData);
    setQuery(getInitialQuery(searchParams));
  }, [productsData]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchFilter(productsData, query.search);
    finalProducts = categoryFilter(finalProducts, query.category);
    setFilteredData(finalProducts);
  }, [query]);

  return (
    <>
      <Search search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.productsData}>
            {filteredData.map((p) => (
              <Cards data={p} key={p.id} />
            ))}
          </div>
        )}
        <SideBar setQuery={setQuery} query={query} />
      </div>
    </>
  );
}

export default Products;
