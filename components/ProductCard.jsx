import Image from "next/image";
import { useState } from "react";
import styles from "../styles/ProductCard.module.css"

const ProductCard = () => {
  const [quantity, setQuantity] = useState(0)
  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1)
    }
  }
  const handleDecrement = () => {
    if (quantity == 1){
      setQuantity(quantity + 4)
    }

    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MARIANNA A LA PLANCHA</h1>
      <span className={styles.price}>$15990</span>
      <button className={styles.boton} onClick={handleDecrement}>-</button>
      <button className={styles.boton} onClick={handleIncrement}>+</button>
      <span className={styles.quantity}>{quantity}</span>
    </div>
  )
}

export default ProductCard