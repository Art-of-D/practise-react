import logo from "../../images/logo.svg";
import PageLinks from "../tools/pageLinks/PageLinks";
import SocialLinks from "../tools/socialLinks/SocialLinks";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} className={styles.navLogo} alt="backroads" />
          <button type="button" className={styles.navToggle} id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass={styles.navLinks} itemClass={styles.navLink} />
        <SocialLinks
          parentClass={styles.socialLinks}
          itemClass={styles.iconLink}
        />
      </div>
    </nav>
  );
};
export default Header;
