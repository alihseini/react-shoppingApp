const shortenTitle = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchFilter = (products, search) => {
  if (!search) return products;
  return products.filter((p) => p.title.toLowerCase().includes(search));
};

const categoryFilter = (products, category) => {
  if (!category) return products;
  return products.filter((p) => p.category === category);
};

const createQuery = (currentQuery, newData) => {
  if (newData.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newData.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return {
    ...currentQuery,
    ...newData,
  };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  if (searchParams.get("category")) {
    query.category = searchParams.get("category");
  }
  if (searchParams.get("search")) {
    query.search = searchParams.get("search");
  }
  return query;
};

const sumHandler = (products) => {
  const itemCounter = products.length;
  const totalPrice = products
    .reduce((total, cur) => total + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemCounter, totalPrice };
};

const quantityHandler = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) return 0;
  else return state.selectedItems[index].quantity;
};

export {
  shortenTitle,
  searchFilter,
  categoryFilter,
  createQuery,
  getInitialQuery,
  sumHandler,
  quantityHandler,
};
