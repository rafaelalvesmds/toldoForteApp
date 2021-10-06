import styles from '../styles/components/Menu.module.scss';
import { useRouter } from 'next/router';



function Menu() {

  const router = useRouter();

  return (
    <div className={styles.container}>

      <div className={styles.logo} onClick={() => router.push('/')}>
          <img src="images/logo.png"/>
      </div>

      <div className={styles.options}>
          <div className={styles.eachOption} onClick={() => router.push('/sobre')}>Sobre</div>
          <div className={styles.eachOption} onClick={() => router.push('/produtos')}>Nossos Produtos</div>
          <div className={styles.eachOption} onClick={() => router.push('/contato')}>Contato</div>
      </div>

    </div>
  );
}

export default Menu;
