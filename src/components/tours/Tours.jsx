import { tours } from "../../data";
import Title from "../tools/title/Title";
import Tour from "./tour/Tour";
import styles from "./Tours.module.css";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className={`${styles.featuredCenter} section-center`}>
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
