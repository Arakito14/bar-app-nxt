import styles from "../styles/ProductList.module.css"
import TableCard from "./TableCard"

const TableList = ({tableList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BarAPP, tomemos... Buenas decisiones</h1>
      <div className={styles.wrapper}>
        {tableList.map((table)=>(
          <TableCard key={table._id} table={table}/>
        ))}
      </div>
    </div>
  )
}

export default TableList