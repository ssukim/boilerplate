import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import CommonLayout from "../../components/common/layout/CommonLayout";

export default function Register() {
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
          <Button label="register" />
        </div>
      </div>
    </CommonLayout>
  );
}
