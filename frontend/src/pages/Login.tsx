import { useNavigate } from "react-router-dom";
import styles from "./auth.module.css";

export default function Login() {
  const nav = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.logoBox}>SM</div>
        <h2 className={styles.brand}>SmartMall</h2>

        <input className={styles.fieldWide} placeholder="USERNAME" />
        <div style={{ height: 14 }} />
        <input className={styles.fieldWide} placeholder="PASSWORD" type="password" />

        <button className={styles.btnWide} onClick={() => nav("/home")}>
          LOGIN
        </button>

        <div className={styles.helper}>
          I don’t have account — <a href="/register">Register</a>
          <br />
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
