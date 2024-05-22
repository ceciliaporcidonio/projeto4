// components/Synopsis.js
import styles from '../styles/Synopsis.module.scss';

const Synopsis = () => (
  <section id="sinopse" className={styles.synopsis}>
    <img src="/images/barbie-movie-cover.jpg" alt="Barbie Movie Cover" />
    <div>
      <h2>Sinopse</h2>
      <p>
        Barbie é uma boneca que vive na Barbielândia, onde tudo é perfeito. Um dia, ela embarca em uma aventura no mundo real e descobre o verdadeiro significado da vida. Acompanhe suas aventuras e desventuras enquanto ela aprende sobre amizade, amor e autoconhecimento.
      </p>
    </div>
  </section>
);

export default Synopsis;
