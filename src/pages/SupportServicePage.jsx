import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SupportSubPage from "components/Profile/SupportSubPage";

const SupportServicePage = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("location", location?.pathname);
  }, [location?.pathname]);

  return <SupportSubPage />;
};

export default SupportServicePage;
