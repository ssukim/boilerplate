import { useUpdateAtom } from "jotai/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import CommonLayout from "../../components/common/layout/CommonLayout";
import {
  asyncAccountLoginAtom,
  asyncAccountRegisterAtom,
} from "../../store/account";

export default function AuthPage() {
  const router = useRouter();

  const asyncLogin = useUpdateAtom(asyncAccountLoginAtom);
  const asyncRegister = useUpdateAtom(asyncAccountRegisterAtom);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = () => {
    asyncRegister({
      username,
      password,
    });
  };

  return (
    <CommonLayout>
      <div style={{ width: "200px" }}>
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
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "5px",
          }}
        >
          <Button label="login" onClick={onClickLogin} />
        </div>
      </div>
    </CommonLayout>
  );
}
