import styles from "/styles/Pedido.module.css"
import { useState } from "react"

const Product = () => {
  const [id, setId] = useState(0);
  const product = [{
    id: 1,
    name: "MARIANNA AL HUEVO",
    price: 17000,
  },
  {
    id: 2,
    name: "MARIANNA AL HUEVO",
    price: 17000,
  },
  {
    id: 3,
    name: "MARIANNA AL HUEVO",
    price: 17000,
  },]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BarAPP, tomemos... Buenas decisiones</h1>
      <div className={styles.wrapper}>
        {product.map((item, i) => (
          <div className={styles.container2}>
            <h1 className={styles.title2} key={i}>{item.name}</h1>
            <span className={styles.price2} key={i}>${item.price}</span>
            <div className={styles.containerBox}>
              <input type="number" defaultValue={1} max={5} min={1} className={styles.quantity} />
            </div>
          </div>
        ))}

      </div>
      
    </div>
  )
}

export default Product