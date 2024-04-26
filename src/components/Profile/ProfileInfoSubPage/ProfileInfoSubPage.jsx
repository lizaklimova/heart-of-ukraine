import ProfileInfo from "../ProfileInfo";
import ProfileNavigation from "../ProfileNavigation";
import { ProfileScrollContainer } from "../Tabs/MyTasks/MyTasks.styled";
import { SubSection } from "../Profile.styled";

const ProfileInfoSubPage = () => {
  return (
    <SubSection>
      <ProfileScrollContainer>
        <ProfileNavigation />
        <ProfileInfo />
      </ProfileScrollContainer>
    </SubSection>
  );
};

export default ProfileInfoSubPage;
