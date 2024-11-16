import IconLink from "../iconLink/IconLink";
import { socialLinks } from "../../../data";
function SocialLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <IconLink key={link.id} itemClass={itemClass} {...link} />;
      })}
    </ul>
  );
}

export default SocialLinks;
