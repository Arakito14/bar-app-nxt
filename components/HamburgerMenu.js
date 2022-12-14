import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
import styles from "../styles/Navbar.module.css"

const HamburgerMenu = () => (<div className='relative p-2'>
    <Menu customBurgerIcon={<HamburgerIcon />} width={'auto'} className='left-0 top-12' >
        <Links />
    </Menu>
</div>)

const HamburgerIcon = () => (<div className='p-1/2'><svg className="w-8 h-8 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div>)

export const Links = () => (<>
    <Link href="/" className={styles.listItem}>Inicio</Link>
    <Link href="/menu" className={styles.listItem}>Listado de productos</Link>
    <Link href="/" className={styles.listItem}>Crear pedido nuevo</Link>
    <Link href="/product/2" className={styles.listItem}>Gestionar pedido</Link>
    <Link href="/mesa" className={styles.listItem}>Listado de mesas</Link>
    <Link href="/cart" className={styles.listItem}>Total de compra</Link>
    <Link href="/orders/2" className={styles.listItem}>Tracking order</Link>
</>)

export const LinksNavBar = () => (<>
    <Link href="/" className={styles.listItem}>Inicio</Link>
    <Link href="/menu" className={styles.listItem}>Menú</Link>
</>)

export default HamburgerMenu