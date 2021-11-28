import { Link } from "@chakra-ui/layout";
import React from "react";
import styles from "../styles/components/ContatoFooter.module.scss";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

export default function ContatoFooter() {
  return (
    <div className={styles.boxFooter}>
      <div className={styles.boxCard}>
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
        <Link margin="8px">Toldo abcdefgh</Link>
        <br />
      </div>

      <div className={styles.cardContato}>
        <p className={styles.titleContato}>Entre em contato conosco !</p>
        <Input
          variant="flushed"
          type="tel"
          placeholder="Telefone"
          className={styles.inputContato}
        ></Input>
        <Input
          variant="flushed"
          type="email"
          placeholder="Email"
          className={styles.inputContato}
        ></Input>
        <Input
          variant="flushed"
          type="text"
          placeholder="Descrição"
          className={styles.inputContato}
        ></Input>
        <Button width="100%" className={styles.btnContato}>
          Enviar
        </Button>
      </div>
    </div>
  );
}
