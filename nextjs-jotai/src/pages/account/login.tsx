import { useUpdateAtom } from "jotai/utils";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import CommonLayout from "../../components/common/layout/CommonLayout";
import { asyncAccountLoginAtom } from "../../store/account";

export default function Login() {
  const asyncLogin = useUpdateAtom(asyncAccountLoginAtom);

  const onClickLogin = () => {
    asyncLogin({
      id: "ssukim0930",
      username: "ssukim",
    });
  };
  return (
    <CommonLayout>
      <div style={{ width: "200px" }}>
        <div style={{ marginBottom: "5px" }}>id</div>
        <Input />
        <div style={{ marginBottom: "10px" }} />
        <div style={{ marginBottom: "5px" }}>password</div>
        <Input type={"password"} />
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
