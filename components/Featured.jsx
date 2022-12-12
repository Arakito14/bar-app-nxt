import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" alt="" fill property="layout"/>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => (
            <Image src="/img/featured.png" key={i} alt="" fill property="layout"/>
          ))}
        </div>
      </div>
      <Image src="/img/arrowr.png" alt="" fill property="layout"/>
    </div>
  )
}

export default Featured