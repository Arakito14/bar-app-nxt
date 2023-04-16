import Image from "next/image"
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link href="/" className={styles.listItem}>Inicio</Link></li>
          <li className={styles.listItem}><Link href="/menu" className={styles.listItem}>Menú</Link></li>
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

      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar