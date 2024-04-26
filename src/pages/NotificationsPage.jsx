import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotificationsSubPage from "src/components/Profile/NotificationsSubPage";

const NotificationsPage = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("location", location?.pathname);
  }, [location?.pathname]);

  return <NotificationsSubPage />;
};

export default NotificationsPage;
