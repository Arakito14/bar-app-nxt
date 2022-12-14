import styles from "../styles/ProductCard.module.css"

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MARIANNA A LA PLANCHA</h1>
      <span className={styles.price}>$15990</span>
      <h1 className={styles.title}>SSD A LA a</h1>
      <span className={styles.price}>$15232990</span>
      <h1 className={styles.title}>OOIOW A LA A</h1>
      <span className={styles.price}>$15990</span>
    </div>
  )
}

export default ProductCard