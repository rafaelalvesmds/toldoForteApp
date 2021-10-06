import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BtnWrapper from "../components/BtnWrapper";
import styles from "../styles/containers/Home.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Menu />

      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.title}>
            <h1>TOLDOS E COBERTURAS</h1>
          </div>
          <BtnWrapper />
        </div>

        <div className="my-slider">
          <div className="gallery autoplay items-3">
            <div id="item-1" className="control-operator"></div>
            <div id="item-2" className="control-operator"></div>
            <div id="item-3" className="control-operator"></div>

            <figure className="item">
              <h1>
                <img src="images/step11.jpg" />
              </h1>
            </figure>

            <figure className="item">
              <h1>
                <img src="images/step12.jpg" />
              </h1>
            </figure>

            <figure className="item">
              <h1>
                <img src="images/step13.jpg" />
              </h1>
            </figure>

            <div className="controls">
              <a href="#item-1" className="control-button">
                .
              </a>
              <a href="#item-2" className="control-button">
                .
              </a>
              <a href="#item-3" className="control-button">
                .
              </a>
            </div>
          </div>
        </div>
        <div className={styles.produtos}>
          <p>NOSSOS PRODUTOS</p>

          <div className={styles.cards}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
