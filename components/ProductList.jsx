import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard"
import TableCard from "./TableCard"

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BarAPP, tomemos... Buenas decisiones</h1>
      <p className={styles.desc}>
        Porfavor agregue productos a su pedido
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <p className={styles.desc}>
        Porfavor agregue el pedido a la mesa
      </p>
      <div className={styles.wrapper}>
        <TableCard />
      </div>
      <button className={styles.boton}>Guardar</button>
    </div>
  )
}

export default ProductList