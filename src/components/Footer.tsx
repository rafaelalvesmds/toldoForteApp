import styles from "../styles/components/Footer.module.scss";
import { useRouter } from "next/router";
import React from "react";
import { Input } from "@chakra-ui/input";

function Footer() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.boxFooter}>
        <div className={styles.boxCard}>
          <a onClick={() => router.push("/produtos")}>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br /> <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br /> <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
          <a>aaaaaaaaaa</a>
          <br />
        </div>

        <div className={styles.cardContato}>
            <p>Entre em contato conosco !</p>
          <Input variant="flushed" type="tel" placeholder="Telefone"></Input>
          <Input variant="flushed" type="email" placeholder="Email"></Input>
          <Input variant="flushed" type="text" placeholder="Descrição" ></Input>
          <Input variant="flushed" type="tel" placeholder="Telefone"></Input>
          <Input variant="flushed" type="tel" placeholder="Telefone"></Input>
        </div>
      </div>
      <div className={styles.boxCardMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8425.039013306996!2d-43.968275802325095!3d-19.84299497818218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691a1b541f3f3%3A0xded9b5d1cfb13a11!2zRXN0YcOnw6NvIFBhbXB1bGhh!5e0!3m2!1spt-BR!2sbr!4v1638072083759!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          loading="lazy"
        ></iframe>
      </div>

      <p className={styles.footer}>
        &copy; 2021 Company, Inc. All rights reserved. - Developed by Rafael
        Alves
      </p>
    </div>
  );
}

export default Footer;
