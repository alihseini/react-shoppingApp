import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  console.log(state);

  return (
    <div className={StyleSheet.container}>
      {state.selectedItems.length === 0 ? (
        <p>Empty!</p>
      ) : (
        state.selectedItems.map((item) => (
          <BasketCard key={item.id} data={item} />
        ))
      )}
    </div>
  );
}

export default CheckoutPage;
