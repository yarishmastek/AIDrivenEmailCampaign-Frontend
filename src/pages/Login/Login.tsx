import { useState } from "react";
import { Input, PasswordInput } from "@mantine/core";
import PrimaryButton from "../../components/PrimaryButton";
import { showToast } from "../../utils/toast";
import { useNavigate } from "react-router";

const Login = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUserLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "9980044534") {
      showToast("Login Successful", "success");
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      showToast("Invalid Credentials", "error");
    }
  };

  return (
    <div className="container mx-auto">
      <div className="text-2xl py-5 text-center border-b">
        Welcome to{" "}
        <span className="text-secondaryBackgroundColor font-poppins-bold">
          CompanyX
        </span>{" "}
        Email Marketing Platform
      </div>
      <form
        className="px-10 max-w-[500px] mx-auto h-[calc(100vh-120px)] flex flex-col justify-center"
        onSubmit={handleUserLogin}
      >
        <div className="space-y-4 shadow-black/30 shadow-sm p-10">
          <div className="text-2xl font-poppins-bold">Login</div>
          <Input.Wrapper label="Username">
            <Input
              onChange={handleInputChange}
              name="username"
              placeholder="Enter Username"
              required
            />
          </Input.Wrapper>
          <Input.Wrapper label="Password">
            <PasswordInput
              onChange={handleInputChange}
              name="password"
              placeholder="Enter Password"
              required
            />
          </Input.Wrapper>
          <PrimaryButton
            text="Login"
            className="float-right"
            type="submit"
            variant="filled"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
