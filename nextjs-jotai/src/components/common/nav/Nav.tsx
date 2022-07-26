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
          <Link
            href={{
              pathname: "/auth",
              query: { isRegister: false },
            }}
          >
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/auth",
              query: { isRegister: true },
            }}
          >
            <a>Register</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
