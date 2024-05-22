// components/Watch.js
import styles from './Watch.module.scss';

const Watch = () => (
  <section id="onde-assistir" className={styles.watch}>
    <h2>Onde Assistir</h2>
    <form>
      <div>
        <label htmlFor="local">Local</label>
        <input type="text" id="local" name="local" required />
      </div>
      <div>
        <label htmlFor="horario">Horário</label>
        <input type="text" id="horario" name="horario" required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  </section>
);

export default Watch;
