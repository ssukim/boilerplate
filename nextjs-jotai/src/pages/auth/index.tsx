import { useRouter } from "next/router";
import { useUpdateAtom } from "jotai/utils";
import Button from "../../components/common/button/Button";
import CommonLayout from "../../components/common/layout/CommonLayout";
import { addAccountAtom } from "../../store/account";
import { clearToken } from "../../store/client";
import AuthForm from "../../components/authForm/AuthForm";

export default function AuthPage() {
  const router = useRouter();
  const { isRegister } = router.query;

  const setUser = useUpdateAtom(addAccountAtom);

  const onLogout = () => {
    setUser(null);
    clearToken();
  };

  return (
    <CommonLayout>
      <AuthForm />
      {isRegister === "false" && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "200px",
            marginTop: "5px",
          }}
        >
          <Button label="logout" onClick={onLogout} />
        </div>
      )}
    </CommonLayout>
  );
}
