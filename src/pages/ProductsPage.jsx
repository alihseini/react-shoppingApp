import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";
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

function Products() {
  useTitle("Shopping App");
  const productsData = useProducts();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

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
        {!productsData.length ? (
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
