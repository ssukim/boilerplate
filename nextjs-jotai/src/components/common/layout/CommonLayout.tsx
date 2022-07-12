import Nav from "../nav/Nav";
import styles from './CommonLayout.module.css'

type Props = {
  children: React.ReactNode;
};
export default function CommonLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Nav />
      {children}
    </div>
  );
}
