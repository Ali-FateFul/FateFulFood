import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">FateFulFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>FateFul FastFood Site | FateFul Food Project &copy;</p>
      </footer>
    </>
  );
}

export default Layout;
