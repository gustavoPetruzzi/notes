import { memo } from "react";
import { Bookmark } from "../Bookmark/Bookmark";
import { BookmarkSize } from "../Bookmark/bookmark-size";
import styles from "./Navbar.module.scss";
import Avatar from "../Avatar/Avatar";
const NavbarComponent: React.FC<{ onSettingsClicked: () => void }> = (
  props
) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Bookmark size={BookmarkSize.SMALL}></Bookmark>
      </div>
      <Avatar onClick={props.onSettingsClicked} />
    </div>
  );
};

export const Navbar = memo(NavbarComponent);
