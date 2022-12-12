import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import HamburgerMenu, { Links } from '../components/hamburger.js'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className='max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md '>
        <div className={styles.phone}><HamburgerMenu /></div>
        <div className={styles.pc}><Links /></div>
      </div>
      <div className={styles.item}>
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