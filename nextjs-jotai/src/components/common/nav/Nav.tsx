import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/todo"}>
            <a>Todo</a>
          </Link>
        </li>
        <li>
          <Link href={"/auth"}>
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
