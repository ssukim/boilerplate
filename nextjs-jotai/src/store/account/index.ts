import axios from "axios";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { update } from "lodash";

export type UserProps = {
  id: string;
  username: string;
  token?: string;
} | null;

const userDefaultState: UserProps = null;

export const accountUserAtom = atom<UserProps>(userDefaultState);
export const accountLoadingAtom = atom(false);

export const asyncAccountLoginAtom = atom(
  null,
  (get, set, update: UserProps) => {
    const fetch = async () => {
      try {
        set(accountLoadingAtom, true);
        await axios
          .post("https://development/api/login", update)
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
