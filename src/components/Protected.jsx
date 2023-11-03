import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.authLogin);

  useEffect(() => {
    if (token === undefined) {
      navigate("/login");
    }
  });

  return children;
};
