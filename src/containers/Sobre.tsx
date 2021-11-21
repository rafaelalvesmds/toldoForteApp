import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/containers/Sobre.module.scss"

export default function SobrePage() {
  return (
    <div className={styles.container}>
      <Header />
      
      <Footer />
    </div>
  );
}
