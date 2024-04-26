import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyChangeInfo from "src/components/Profile/MyChangeInfo";
import ProfileHeader from "src/components/Profile/ProfileHeader/ProfileHeader";

const ChangeInfoPage = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("location", location.pathname);
  }, [location.pathname]);

  return (
    <ProfileHeader classN="change">
      <MyChangeInfo />
    </ProfileHeader>
  );
};

export default ChangeInfoPage;
