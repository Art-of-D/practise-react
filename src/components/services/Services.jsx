import { services } from "../../data";
import Title from "../tools/title/Title";
import Service from "./service/Service";
import styles from "./Services.module.css";
const Services = () => {
  return (
    <section className={`section ${styles.services}`} id="services">
      <Title title="our" subTitle="services" />

      <div className={`section-center ${styles.servicesCenter}`}>
        {services.map((service) => {
          return (
            <Service
              parentClass={styles.service}
              {...service}
              key={service.id}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Services;
