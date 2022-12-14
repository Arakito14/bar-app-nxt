import styles from "../styles/ProductCard.module.css"
import ProductCard from "./ProductCard"
import TableCard from "./TableCard"

const Product = () => {
  const [size, setSize] = useState(0);
  const product = {
    id: 1,
    name: "MARIANNA A LA PLANCHA",
    price: 15990,
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BarAPP, tomemos... Buenas decisiones</h1>
      <p className={styles.desc}>
        Porfavor agregue productos a su pedido
      </p>
      <h1 className={styles.title}>{product.name}</h1>
      <span className={styles.price}>${product.price}</span>
      <div className={styles.add}>
            <input type="number" defaultValue={1} max={5} min={1} className={styles.quantity}/>
      </div>


      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <p className={styles.desc}>
        Porfavor agregue el pedido a la mesa
      </p>
      <div className={styles.wrapper}>
        <TableCard />
      </div>
      <button className={styles.boton}>Guardar</button>
    </div>
  )
}

export default Product