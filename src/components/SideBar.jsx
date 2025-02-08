import React from "react";
import styles from "./SideBar.module.css";
import { BiCategoryAlt } from "react-icons/bi";
import { createQuery } from "../helpers/helper";

const categories = [
  { id: 1, category: "All" },
  { id: 2, category: "Electronics" },
  { id: 3, category: "Jewelery" },
  { id: 4, category: "Men's Clothing" },
  { id: 5, category: "Women's Clothing" },
];

function SideBar({ setQuery }) {
  const filterHandler = (e) => {
    if (e.target.tagName !== "LI") return;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQuery(query, { category }));
  };

  return (
    <div className={styles.filters}>
      <div>
        <BiCategoryAlt />
        <p>Categories</p>
      </div>
      <ul onClick={filterHandler}>
        {categories.map((item) => (
          <li key={item.id}>{item.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
