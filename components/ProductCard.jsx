import styles from "../styles/ProductCard.module.css"

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.prices}</span>
    </div>
  )
}

export default ProductCard