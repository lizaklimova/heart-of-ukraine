import ForgotPassContent from "components/Auth/ForgotPassContent";
import MobPictureContainer from "components/Auth/MobPictureContainer";
import PictureContainer from "components/Auth/PictureContainer";
import BackButton from "src/components/Auth/BackBtn/BackBtn";
import { PositioningWrap } from "components/Auth/PictureContainer/PictureContainer.styled";
import { AuthWrap, ScrollContainer } from "components/Auth/CommonAuth.styled";

const ForgotPassPage = () => {
  return (
    <>
      <MobPictureContainer>
        <AuthWrap>
          <BackButton />
          <ForgotPassContent />
        </AuthWrap>
      </MobPictureContainer>

      <PictureContainer>
        <PositioningWrap>
          <ScrollContainer>
            <AuthWrap>
              <BackButton />
              <ForgotPassContent />
            </AuthWrap>
          </ScrollContainer>
        </PositioningWrap>
      </PictureContainer>
    </>
  );
};

export default ForgotPassPage;
