import aboutImg from "../../images/about.jpeg";
import Title from "../tools/title/Title";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className={`${styles.aboutCenter} section-center`}>
        <div className={styles.aboutImg}>
          <img
            src={aboutImg}
            className={styles.aboutPhoto}
            alt="awesome beach"
          />
        </div>
        <article className={styles.aboutInfo}>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
