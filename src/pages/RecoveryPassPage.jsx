import RecoveryPassContent from "components/Auth/RecoveryPassContent";
import MobPictureContainer from "components/Auth/MobPictureContainer";
import PictureContainer from "components/Auth/PictureContainer";
import { PositioningWrap } from "components/Auth/PictureContainer/PictureContainer.styled";
import { ScrollContainer } from "components/Auth/CommonAuth.styled";

const RecoveryPassPage = () => {
  return (
    <>
      <MobPictureContainer>
        <RecoveryPassContent />
      </MobPictureContainer>

      <PictureContainer>
        <PositioningWrap>
          <ScrollContainer>
            <RecoveryPassContent />
          </ScrollContainer>
        </PositioningWrap>
      </PictureContainer>
    </>
  );
};

export default RecoveryPassPage;
