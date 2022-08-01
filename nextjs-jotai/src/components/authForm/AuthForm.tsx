import { useUpdateAtom } from "jotai/utils";
import { useRouter } from "next/router";
import React from "react";
import { FormEvent, useState } from "react";
import {
  asyncAccountLoginAtom,
  asyncAccountRegisterAtom,
} from "../../store/account";
import Button from "../common/button/Button";
import Input from "../common/input/Input";

export default function AuthForm() {
  const router = useRouter();
  const { isRegister } = router.query;

  const asyncLogin = useUpdateAtom(asyncAccountLoginAtom);
  const asyncRegister = useUpdateAtom(asyncAccountRegisterAtom);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRegister === "true") {
      asyncRegister({
        username,
        password,
      });
    } else {
      asyncLogin({
        username,
        password,
      });
    }
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <form style={{ width: "200px" }} onSubmit={(e) => onSubmit(e)}>
      <div style={{ marginBottom: "5px" }}>username</div>
      <Input value={username} onChange={onChangeUsername} />
      <div style={{ marginBottom: "10px" }} />
      <div style={{ marginBottom: "5px" }}>password</div>
      <Input
        type={"password"}
        value={password}
        autoComplete="off"
        onChange={onChangePassword}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "5px",
        }}
      >
        <Button label={isRegister === "true" ? "register" : "login"} />
      </div>
    </form>
  );
}
