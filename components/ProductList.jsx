import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BarAPP, tomemos... Buenas decisiones</h1>
      <p className={styles.desc}>
        Porfavor agregue el pedido a la mesa:
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default ProductList