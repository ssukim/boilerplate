import axios from "axios";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { update } from "lodash";
import client from "../client";

export type UserProps = {
  username: string;
  password?: string;
  token?: string;
} | null;

const userDefaultState: UserProps = null;

export const accountUserAtom = atom<UserProps>(userDefaultState);
export const accountLoadingAtom = atom(false);

export const asyncAccountLoginAtom = atom(
  null,
  (get, set, params: UserProps) => {
    const fetch = async () => {
      try {
        set(accountLoadingAtom, true);
        await client
          .post("/auth/login", params)
          .then((res) => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      } finally {
        set(accountLoadingAtom, false);
      }
    };
    fetch();
  }
);

export const asyncAccountRegisterAtom = atom(
  null,
  (get, set, params: UserProps) => {
    const fetch = async () => {
      try {
        set(accountLoadingAtom, true);
        await client
          .post("/auth/register", params)
          .then((res) => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      } finally {
        set(accountLoadingAtom, false);
      }
    };
    fetch();
  }
);
