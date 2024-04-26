import MobPictureContainer from "components/Auth/MobPictureContainer";
import PictureContainer from "components/Auth/PictureContainer";
import VerificationContent from "components/Auth/VerificationContent";
import { PositioningWrap } from "components/Auth/PictureContainer/PictureContainer.styled";

const VerificationPage = () => {
  return (
    <>
      <MobPictureContainer>
        <VerificationContent />
      </MobPictureContainer>

      <PictureContainer>
        <PositioningWrap>
          <VerificationContent />
        </PositioningWrap>
      </PictureContainer>
    </>
  );
};

export default VerificationPage;
