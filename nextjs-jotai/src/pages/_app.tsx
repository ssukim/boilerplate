if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../mocks");
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "jotai";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    authCheck(router.asPath);
  }, []);

  function authCheck(url: string) {}

  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
