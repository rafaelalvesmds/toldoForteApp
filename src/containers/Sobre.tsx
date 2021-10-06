import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styles from "../styles/containers/Sobre.module.scss";

export default function SobrePage() {
  return (
    <div className={styles.container}>
      <Menu />
      
      <Footer />
    </div>
  );
}
