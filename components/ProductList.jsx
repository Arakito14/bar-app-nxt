import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard"

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BarAPP, tomemos... Buenas decisiones</h1>
      <div className={styles.wrapper}>
        {productList.map((product)=>(
          <ProductList key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList