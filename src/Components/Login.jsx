import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Flex, Tooltip } from "antd";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "example@gmial.com" && password === "1234") {
      navigate("/home");
    } else {
      alert("Invalid credencials");
    }
  };

  return (
    <div>
      <Button type="primary" shape="circle">
        A
      </Button>
    </div>
  );
}
export default Login;
