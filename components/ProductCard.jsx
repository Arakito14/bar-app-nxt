import styles from "../styles/ProductCard.module.css"
import Link from "next/link"

const ProductCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product._id}`} passHref>
        <h1 className={styles.title}>{product.title}</h1>
      </Link>
      <span className={styles.price}>${product.prices}</span>
    </div>
  )
}

export default ProductCard