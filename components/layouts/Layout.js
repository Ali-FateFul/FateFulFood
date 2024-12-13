import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header>
        <div className={styles.left}>
          <Link href="/">FateFul Food</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      {children}
      <footer>
        <p>FateFul FastFood Site | FateFul Food Project &copy;</p>
      </footer>
    </>
  );
}

export default Layout;