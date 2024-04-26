import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChangePwd from "components/Profile/ChangePwd";

const ChangePasswordPage = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("location", location?.pathname);
  }, [location?.pathname]);

  return <ChangePwd />;
};

export default ChangePasswordPage;
