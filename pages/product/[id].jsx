import styles from "../../styles/Product.module.css";
import { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({product}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(addProduct({...product, price: product.prices, quantity}));
  };

  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>${product.prices}</span>
        <div className={styles.add}>
            <input onChange={(e)=>setQuantity(e.target.value)} type="number" max={5} min={1} defaultValue={1} className={styles.quantity}/>
            <button className={styles.button} onClick={handleClick}>Agregar</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({params}) => {
  // const myCookie = ctx.req?.cookies || "";
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );  
  return {
    props: {
      product: res.data,
      // admin,
    },
  };
};

export default Product;