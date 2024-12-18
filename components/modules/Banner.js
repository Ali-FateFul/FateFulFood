import Link from "next/link";
import styles from "./Banner.module.css";
import food from "../../public/images/banner.png";
function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>FateFulFood</h2>
        <p>Food Delivery and Taeout!</p>
        <span>
          FateFulFood is an online food ordering and delivery platform lauched
          by Ali in 2024. Meals are deliverd by couriers using cars, scooters,
          bikes, or on foot.
        </span>
        <Link href="/menu">See All</Link>
      </div>
      <div className={styles.right}>
        <img src="/images/banner.png" alt="food image" />
      </div>
    </div>
  );
}

export default Banner;
