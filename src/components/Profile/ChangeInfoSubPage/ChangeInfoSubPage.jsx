import ProfileNavigation from "../ProfileNavigation";
import { ProfileScrollContainer } from "../Tabs/MyTasks/MyTasks.styled";
import { SubSection } from "../Profile.styled";
import ChangeSection from "../ChangeSection";

const ChangeInfoSubPage = () => {
  return (
    <SubSection className="change">
      <ProfileScrollContainer>
        <ProfileNavigation />
        <ChangeSection />
      </ProfileScrollContainer>
    </SubSection>
  );
};

export default ChangeInfoSubPage;
