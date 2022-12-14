import styles from "../styles/CrearCard.module.css"
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "/redux/cartSlice.js";

const CrearCard = ({ crear }) => {
  const [price, setPrice] = useState(crear.prices);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({...crear, price, quantity}));
  };

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{crear.title}</h1>
        <span className={styles.price}>${crear.prices}</span>
        <input
        onChange={(e) => setQuantity(e.target.value)}
        type="number" 
        max={5} 
        min={1} 
        defaultValue={1} 
        className={styles.quantity} 
        />
        <button 
        onClick={handleClick}
        className={styles.button}
        >Agregar</button>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      crear: res.data,
    },
  };
};

export default CrearCard