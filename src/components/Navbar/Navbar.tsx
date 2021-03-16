import { memo } from 'react';
import styles from './Navbar.module.scss';

const NavbarComponent = () => {
  return (
    <div className={styles.navbar}></div>
  )
}

export const Navbar = memo(NavbarComponent);