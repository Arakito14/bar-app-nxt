import ProductList from '../components/ProductList'
import styles from "../styles/Home.module.css"

export default function Menu() {
  return (
    <div className={styles.container}>
      <ProductList />
    </div>
  )
}
