import Menu from "../components/Menu";
import Footer from "../components/Footer";
import styles from "../styles/containers/Produtos.module.scss";

export default function ProdutosPage() {
  return (
    <div className={styles.container}>
      <Menu />
      
      <Footer />
    </div>
  );
}
