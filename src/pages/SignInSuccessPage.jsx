import MobPictureContainer from "components/Auth/MobPictureContainer";
import PictureContainer from "components/Auth/PictureContainer";
import SignInSuccessContent from "components/Auth/SignInSuccessContent";
import { PositioningWrap } from "components/Auth/PictureContainer/PictureContainer.styled";

const SignInSuccessPage = () => {
  return (
    <>
      <MobPictureContainer>
        <SignInSuccessContent />
      </MobPictureContainer>

      <PictureContainer>
        <PositioningWrap>
          <SignInSuccessContent />
        </PositioningWrap>
      </PictureContainer>
    </>
  );
};

export default SignInSuccessPage;
