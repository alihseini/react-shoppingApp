import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css"

function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        visible={true}
        height="60"
        width="60"
        strokeColor="#574b90"
        strokeWidth="5"
      />
    </div>
  );
}

export default Loader;
