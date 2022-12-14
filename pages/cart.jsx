import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <tbody className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <span className={styles.name}>MARIANNA</span>
            </td>
            <td>
              <span className={styles.price}>$1990</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$3980</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <span className={styles.name}>MARIANNA</span>
            </td>
            <td>
              <span className={styles.price}>$1990</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$3980</span>
            </td>
          </tr>
        </tbody>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>TOTAL PEDIDO</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Descuento:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>GUARDAR</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
