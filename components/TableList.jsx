import styles from "../styles/ProductList.module.css"
import TableCard from "./TableCard"

const TableList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BarAPP, tomemos... Buenas decisiones</h1>
      <p className={styles.desc}>
        LISTADO DE MESAS
      </p>
      <div className={styles.wrapper}>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
        <TableCard/>
      </div>
    </div>
  )
}

export default TableList