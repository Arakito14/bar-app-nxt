import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
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
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>TOTAL PEDIDO</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$7960
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Descuento:</b>$0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$7960
          </div>
          <button className={styles.button}>CREAR</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
