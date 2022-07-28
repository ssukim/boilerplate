import axios from "axios";
import { atom } from "jotai";
import { atomWithReset, atomWithStorage } from "jotai/utils";
import { update } from "lodash";
import client, { applyToken } from "../client";

export type UserProps = {
  username: string;
  password?: string;
  token?: string;
} | null;

const userDefaultState: UserProps = null;

export const accountUserAtom = atomWithStorage<UserProps>(
  "user",
  userDefaultState
);
export const accountLoadingAtom = atom(false);

export const readAccountAtom = atom((get) => get(accountUserAtom));

export const addAccountAtom = atom(
  null, // it's a convention to pass `null` for the first argument
  (_, set, update: UserProps) => {
    // `update` is any single value we receive for updating this atom
    set(accountUserAtom, update);
  }
);

export const asyncAccountLoginAtom = atom(null, (_, set, params: UserProps) => {
  const fetch = async () => {
    try {
      set(accountLoadingAtom, true);
      await client.post("/auth/login", params).then((res) => {
        applyToken(res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));
      });
    } catch (error) {
      console.log(error);
    } finally {
      set(accountLoadingAtom, false);
    }
  };
  fetch();
});

export const asyncAccountRegisterAtom = atom(
  null,
  (get, set, params: UserProps) => {
    const fetch = async () => {
      try {
        set(accountLoadingAtom, true);
        await client.post("/auth/register", params).then((res) => {
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
