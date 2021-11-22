import Footer from "../../Organisms/Footer";
import Alert from "../../Organisms/Alert";
import Meta from "../Meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <Alert />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
