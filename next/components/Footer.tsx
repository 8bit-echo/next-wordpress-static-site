import { ReactElement } from 'react';
import styles from './Footer.module.css';


export function Footer(): ReactElement {
  return (
    <footer className={styles.stickyFooter}>
      &copy; {new Date().getFullYear()}
    </footer>
  )
}
