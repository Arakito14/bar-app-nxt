import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" style property="cover" fill prop="layout" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            LO QUIERES, LO TIENES, SOLUCIONES RÁPIDAS JUNTO A BARAPP.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CONTACTO</h1>
          <p className={styles.text}>
            AVENIDA VALPARAÍSO N°90, VIÑA DEL MAR.
          </p>
          <p className={styles.text}>
            NÚMERO:
            <br /> (+56) 989023104
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>DIAS DE TRABAJO</h1>
          <p className={styles.text}>
            LUNES A VIERNES
            <br /> 14:00 – 22:00
          </p>
          <p className={styles.text}>
            SABADO A DOMINGO
            <br /> 16:00 – 20:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
