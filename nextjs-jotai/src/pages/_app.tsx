if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../../mocks");
}

import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { Atom, Provider, useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import {
  accountUserAtom,
  addAccountAtom,
  readAccountAtom,
} from "../store/account";
import { useUpdateAtom } from "jotai/utils";
import { applyToken } from "../store/client";

function MyApp({ Component, pageProps }: AppProps) {
  // const setUser = useUpdateAtom(addAccountAtom);
  const user = useAtomValue(readAccountAtom);

  useEffect(() => {
    if (user?.token) {
      applyToken(user.token);
    }
  }, []);

  return (
    <Provider
    // initialValues={
    //   [[accountUserAtom, user]] as Array<[Atom<unknown>, unknown]>
    // }
    >
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
