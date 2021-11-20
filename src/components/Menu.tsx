import styles from '../styles/components/Menu.module.scss';
import { useRouter } from 'next/router';



function Menu() {

  const router = useRouter();

  return (
    <div className={styles.container}>

      <div className={styles.options}>
          <div className={styles.eachOption} onClick={() => router.push('/sobre')}>Sobre</div>
          <div className={styles.eachOption} onClick={() => router.push('/produtos')}>Produtos</div>
          <div className={styles.eachOption} onClick={() => router.push('/contato')}>Contato</div>
      </div>

    </div>
  );
}

export default Menu;
