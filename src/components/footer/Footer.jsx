import PageLinks from "../tools/pageLinks/PageLinks";
import SocialLinks from "../tools/socialLinks/SocialLinks";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={`${styles.footer} section`}>
      <PageLinks
        parentClass={styles.footerLinks}
        itemClass={styles.footerLink}
      />
      <SocialLinks
        parentClass={styles.footerLinks}
        itemClass={styles.footerIcon}
      />
      <p className={styles.footerCopyright}>
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
