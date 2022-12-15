import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AlreadyLogin = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/todo");
    }
  });
  return children;
};

export default AlreadyLogin;
