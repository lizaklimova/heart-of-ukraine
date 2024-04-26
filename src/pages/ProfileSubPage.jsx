import { useParams } from "react-router-dom";
import ProfileInfoSubPage from "src/components/Profile/ProfileInfoSubPage";
import MyTasks from "src/components/Profile/Tabs/MyTasks";
import ChangeInfoSubPage from "src/components/Profile/ChangeInfoSubPage";
import ChangePasswordPage from "./ChangePasswordPage";
import SupportSubPage from "src/components/Profile/SupportSubPage";
import NotificationsSubPage from "src/components/Profile/NotificationsSubPage";

const ProfileSubPage = () => {
  const { id } = useParams();

  const renderContent = () => {
    switch (id) {
      case "personal":
        return <ProfileInfoSubPage />;
      case "change":
        return <ChangeInfoSubPage />;
      case "changePassword":
        return <ChangePasswordPage />;
      case "requests":
        return <MyTasks />;
      case "responses":
        return <MyTasks />;
      case "notifications":
        return <NotificationsSubPage />;
      case "support":
        return <SupportSubPage />;
      default:
        return null;
    }
  };

  return renderContent();
};

export default ProfileSubPage;
