import { pageLinks } from "../../../data";
import Link from "../link/Link";
const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <Link key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default PageLinks;
