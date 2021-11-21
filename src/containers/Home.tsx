import Footer from "../components/Footer";
import styles from "../styles/containers/Home.module.scss";
import React from "react";
import Header from "../components/Header";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.fundoTela1}>
        <Header />
        <div className={styles.box}>
          <div className={styles.box1}>
            <h1 className={styles.title}>TOLDOS E COBERTURAS</h1>

            <button
              className={styles.btn}
              onClick={() => router.push("/produtos")}
            >
              VEJA NOSSOS PRODUTOS
            </button>
          </div>

          <div className={styles.box2}>
            {/* <img src="https://png.pngtree.com/png-vector/20190515/ourlarge/pngtree-red-striped-awnings-vector-illustration-png-image_1043902.jpg"/> */}
            <img className={styles.toldoCard} src="/images/toldo.png" />
            <p className={styles.text}>A MELHOR SOLUÇÃO EM TOLDOS</p>
            <p>
              Qualidade, tecnologia e inovação em toldos para as mais diversas
              aplicações residenciais e comerciais
            </p>
          </div>
        </div>
      </div>

      <div className={styles.fundoTela2}>
      <h1 className={styles.titleTela2}>OS MAIS PEDIDOS</h1>
        <div className={styles.boxTela2}>
          <div className={styles.box1Tela2}>
            <img className={styles.imgTela2} src="https://bit.ly/2Z4KKcF" />
          </div>

          <div className={styles.box2Tela2}>
            <h1>AAAAAAAAAAAAAAA</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, quibusdam dolorum! Officia facere illum fugiat?
              Nobis impedit, et ipsum quibusdam magni aliquid cum tempora
              eligendi laborum, dignissimos mollitia harum similique.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
