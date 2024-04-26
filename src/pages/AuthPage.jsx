import { useParams } from "react-router-dom";
import MobPictureContainer from "components/Auth/MobPictureContainer";
import PictureContainer from "components/Auth/PictureContainer";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import { PositioningWrap } from "../components/Auth/PictureContainer/PictureContainer.styled";

const AuthPage = () => {
  const { authId } = useParams();

  return (
    <>
      {authId === "login" ? (
        <>
          <MobPictureContainer>
            <SignInPage />
          </MobPictureContainer>

          <PictureContainer>
            <PositioningWrap>
              <SignInPage />
            </PositioningWrap>
          </PictureContainer>
        </>
      ) : (
        <>
          <MobPictureContainer>
            <SignUpPage />
          </MobPictureContainer>

          <PictureContainer>
            <PositioningWrap>
              <SignUpPage />
            </PositioningWrap>
          </PictureContainer>
        </>
      )}
    </>
  );
};

export default AuthPage;
