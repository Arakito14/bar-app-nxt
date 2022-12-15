import styles from "../styles/Cart.module.css";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
          </tbody>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.price}>${product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>TOTAL PEDIDO</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Descuento:</b>$0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${cart.total}
          </div>
          <button className={styles.button}>CREAR</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
