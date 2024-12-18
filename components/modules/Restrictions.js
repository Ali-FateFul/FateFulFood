import styles from "./Restrictions.module.css";
function Restrictions() {
  return (
    <div className={styles.container}>
      <h3>Restriction</h3>
      <p>
        Prohibited items. Marchants may only offer to sell items expressly
        permitted by their agreement with Uber. Amerchant cannot offer specilly
        regulated or illicit items, like cannabidiol (CBD) and
        tetrahydrocannabinol (THC), on their Uber Eats menu.
      </p>
    </div>
  );
}

export default Restrictions;
