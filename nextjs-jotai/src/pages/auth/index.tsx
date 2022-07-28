import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import CommonLayout from "../../components/common/layout/CommonLayout";
import {
  asyncAccountLoginAtom,
  asyncAccountRegisterAtom,
} from "../../store/account";
import { readTodoListAtom } from "../../store/todo";

export default function AuthPage() {
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

  return (
    <CommonLayout>
      <form style={{ width: "200px" }} onSubmit={(e) => onSubmit(e)}>
        <div style={{ marginBottom: "5px" }}>username</div>
        <Input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <div style={{ marginBottom: "10px" }} />
        <div style={{ marginBottom: "5px" }}>password</div>
        <Input
          type={"password"}
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.currentTarget.value)}
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
    </CommonLayout>
  );
}
