import styles from "./Tour.module.css";
const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <article className={styles.tourCard}>
      <div className={styles.tourImgContainer}>
        <img src={image} className={styles.tourImg} alt={title} />
        <p className={styles.tourDate}>{date}</p>
      </div>
      <div className={styles.tourInfo}>
        <div className={styles.tourTitle}>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className={styles.tourFooter}>
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>from ${cost}</p>
          <p>{duration} days</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
