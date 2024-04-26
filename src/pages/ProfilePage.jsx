import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MyProfile from "components/Profile/MyProfile";
import ProfileHeader from "components/Profile/ProfileHeader/ProfileHeader";
import ProfileNavigation from "components/Profile/ProfileNavigation";
import { useWindowWidth } from "hooks/useWindowWidth";

const ProfilePage = () => {
  const location = useLocation();
  const [isChangeProfile, setIsChangeProfile] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    localStorage.setItem("location", location.pathname);
    setIsChangeProfile(location.pathname === "/profile/change");
  }, [isChangeProfile, location]);

  return (
    <ProfileHeader classN={isChangeProfile ? "change" : ""}>
      <MyProfile classN={isChangeProfile ? "change" : ""} />
      {windowWidth < 1440 && <ProfileNavigation />}
      <Outlet />
    </ProfileHeader>
  );
};

export default ProfilePage;
