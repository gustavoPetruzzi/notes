import { memo } from 'react';
import { Bookmark } from '../Bookmark/Bookmark';
import { BookmarkSize } from '../Bookmark/bookmark-size';
import styles from './Navbar.module.scss';

const NavbarComponent = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Bookmark size={BookmarkSize.SMALL}></Bookmark>
        <p>Notes</p>
      </div>
      <div>
        user
      </div>
    </div>
  )
}

export const Navbar = memo(NavbarComponent);