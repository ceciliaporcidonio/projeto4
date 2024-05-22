// components/Carousel.js
import Image from 'next/image';
import styles from '../styles/Carousel.module.scss';

const Carousel = () => (
  <div className={styles.carousel}>
    <Image src="/images/barbie1.jpg" alt="Barbie 1" width={500} height={300} />
    <Image src="/images/barbie2.jpg" alt="Barbie 2" width={500} height={300} />
    <Image src="/images/barbie3.jpg" alt="Barbie 3" width={500} height={300} />
  </div>
);

export default Carousel;
