import { useNavigate } from "react-router-dom";
import styles from "./auth.module.css";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logoBox}>SM</div>

        <h1 className={styles.bigTitle}>Welcome to</h1>
        <div className={styles.subTitle}>SmartMall</div>

        <div className={styles.actionsRow}>
          <button className={styles.btnPrimary} onClick={() => nav("/register")}>
            SIGN UP
          </button>
          <button className={styles.btnGhost} onClick={() => nav("/login")}>
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}
