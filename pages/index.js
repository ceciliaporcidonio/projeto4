// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Synopsis from '../components/Synopsis';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Head>
      <title>Barbie Landing Page</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&family=Pacifico&display=swap" rel="stylesheet" />
    </Head>
    <Header />
    <main>
      <Carousel />
      <Synopsis />
      <Gallery />
      <section id="onde-assistir">
        <h2>Onde Assistir</h2>
        <form>
          <label htmlFor="local">Local:</label>
          <input type="text" id="local" name="local" />
          <label htmlFor="horario">Horário:</label>
          <input type="text" id="horario" name="horario" />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
    <Footer />
  </div>
);

export default Home;
