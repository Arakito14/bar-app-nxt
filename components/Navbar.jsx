import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { Links } from "./HamburgerMenu"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}><Links /></li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Image src="/img/logo-dark.png" alt="" width="72" height="72" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Tomemos…</div>
          <div className={styles.text}>Buenas decisiones</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Ingresar</li>
          <li className={styles.listItem}>Crear</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar