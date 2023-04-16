import styles from "../styles/CrearList.module.css"
import CrearCard from "./CrearCard"

const CrearList = ({ crearList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BarAPP, tomemos... Buenas decisiones</h1>
      <div className={styles.wrapper}>
        {crearList.map((crear) => (
          <CrearCard key={crear._id} crear={crear}/>
        ))}
      </div>
    </div>
  )
}

export default CrearList