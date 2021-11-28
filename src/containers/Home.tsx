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
        <div className={styles.box1}>
          <div className={styles.boxA1}>
            <h1 className={styles.title1}>TOLDOS E COBERTURAS</h1>

            <button
              className={styles.btn1}
              onClick={() => router.push("/produtos")}
            >
              VEJA NOSSOS PRODUTOS
            </button>
          </div>

          <div className={styles.boxB1}>
            {/* <img src="https://png.pngtree.com/png-vector/20190515/ourlarge/pngtree-red-striped-awnings-vector-illustration-png-image_1043902.jpg"/> */}
            <img className={styles.toldoImg1} src="/images/toldo.png" />
            <p className={styles.text1}>A MELHOR SOLUÇÃO EM TOLDOS</p>
            <p>
              Qualidade, tecnologia e inovação em toldos para as mais diversas
              aplicações residenciais e comerciais
            </p>
          </div>
        </div>
      </div>

      <div className={styles.fundoTela2}>
        <h1 className={styles.title2}>OS MAIS POPULARES</h1>

        <div className={styles.box2}>
          <div className={styles.boxA2}>
            <img className={styles.img2} src="https://bit.ly/2Z4KKcF" />
          </div>

          <div className={styles.boxB2}>
            <div className={styles.listra2}></div>

            <div className={styles.boxBA2}>
              <h1 className={styles.titleBA2}>TOLDOS E COBERTURAS</h1>
              <p className={styles.textBA2}>
                A Toldo Forte desenvolve com Inovação, Tecnologia e Design, as
                melhores soluções em proteção externa. Nossos produtos são
                utilizados para ampliar e valorizar espaços em residências,
                áreas comerciais e corporativas, nos mais diversos estilos
                arquitetônicos.
              </p>
              <button
                className={styles.btn2}
                onClick={() => router.push("/produtos")}
              >
                VEJA MAIS
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fundoTela3}>
        <div className={styles.box3}>
          <div className={styles.boxes3}>
            <div className={styles.boxCardA3}>
              <div className={styles.traco3}></div>
              <h1 className={styles.title3}>Experiência</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                excepturi, cum modi tenetur quasi voluptatem labore consequatur
                veniam fuga corrupti! Dolor qui consequuntur quod recusandae
                eveniet debitis tempore! Adipisci, voluptas.
              </p>
            </div>

            <div className={styles.boxCardA3}>
              <div className={styles.traco3}></div>
              <h1 className={styles.title3}>Inovação</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                excepturi, cum modi tenetur quasi voluptatem labore consequatur
                veniam fuga corrupti! Dolor qui consequuntur quod recusandae
                eveniet debitis tempore! Adipisci, voluptas.
              </p>
            </div>
          </div>

          <div className={styles.boxes3}>
            <div className={styles.boxCardA3}>
              <div className={styles.traco3}></div>
              <h1 className={styles.title3}>Garantia</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                excepturi, cum modi tenetur quasi voluptatem labore consequatur
                veniam fuga corrupti! Dolor qui consequuntur quod recusandae
                eveniet debitis tempore! Adipisci, voluptas.
              </p>
            </div>
            <div className={styles.boxCardB3}>
              <p className={styles.title3}>aaaaaaa aaaaaa aaaaa</p>
              <h1>
                Envie uma mensagem ou entre em contato conosco por um de nossos
                canais de atendimento
              </h1>
              <button
                className={styles.btn3}
                onClick={() => router.push("/contato")}
              >
                Faça um orçamento
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
