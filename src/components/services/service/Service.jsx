import styles from "./Service.module.css";
const Service = ({ parentClass, icon, title, text }) => {
  return (
    <article className={parentClass}>
      <span className={styles.serviceIcon}>
        <i className={icon}></i>
      </span>
      <div className={styles.serviceInfo}>
        <h4 className={styles.serviceTitle}>{title}</h4>
        <p className={styles.serviceText}>{text}</p>
      </div>
    </article>
  );
};
export default Service;
