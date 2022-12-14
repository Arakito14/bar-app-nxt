import styles from "../styles/CrearCard.module.css"

const CrearCard = ({ crear }) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{crear.title}</h1>
        <span className={styles.price}>${crear.prices}</span>
        <input type="number" max={5} min={1} defaultValue={1} className={styles.quantity} />
    </div>
  )
}

export default CrearCard