import { IoMdSearch } from "react-icons/io";
import styles from "./Search.module.css";
import { createQuery } from "../helpers/helper";

function Search({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQuery(query, { search }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoMdSearch />
      </button>
    </div>
  );
}

export default Search;
