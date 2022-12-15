import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NeedLogin = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });
  return children;
};

export default NeedLogin;
