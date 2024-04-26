import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MyPersonalInfo from "components/Profile/MyPersonalInfo";
import ProfileHeader from "components/Profile/ProfileHeader/ProfileHeader";

const PersonalInfoPage = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("location", location.pathname);
  }, [location.pathname]);

  return (
    <ProfileHeader classN="personal">
      <MyPersonalInfo />
    </ProfileHeader>
  );
};

export default PersonalInfoPage;
