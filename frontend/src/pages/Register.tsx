import { useNavigate } from "react-router-dom";
import styles from "./auth.module.css";

export default function Register() {
  const nav = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.logoBox}>SM</div>
        <h2 className={styles.brand}>SmartMall</h2>

        <div className={styles.grid2}>
          <input className={styles.field} placeholder="FIRST NAME" />
          <input className={styles.field} placeholder="CREATE PASSWORD" type="password" />

          <input className={styles.field} placeholder="LAST NAME" />
          <input className={styles.field} placeholder="CONFIRM PASSWORD" type="password" />

          <input className={styles.fieldWide} placeholder="EMAIL" />
        </div>

        <button className={styles.btnWide} onClick={() => nav("/login")}>
          REGISTER
        </button>

        <div className={styles.helper}>
          I have already account — <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}
