// components/Gallery.js
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery = () => (
  <section id="galeria">
    <h2>Galeria</h2>
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="/images/gallery1.jpg" alt="Galeria 1" />
      </div>
      <div>
        <img src="/images/gallery2.jpg" alt="Galeria 2" />
      </div>
      <div>
        <img src="/images/gallery3.jpg" alt="Galeria 3" />
      </div>
      <div>
        <img src="/images/gallery4.jpg" alt="Galeria 4" />
      </div>
    </Carousel>
  </section>
);

export default Gallery;
