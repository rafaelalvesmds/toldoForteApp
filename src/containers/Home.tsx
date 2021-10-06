import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BtnWrapper from "../components/BtnWrapper";
import styles from "../styles/containers/Home.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Menu />
        <div className={styles.box}>
          <div className={styles.title}>
            <h1>TOLDOS E COBERTURAS</h1>
          </div>
          <BtnWrapper />
        </div>
      <Footer />
    </div>
  );
}

