import { PicContainer, PicBlock } from "./PictureContainer.styled";

const PictureContainer = ({ children }) => {
  return (
    <PicContainer>
      {children}
      <PicBlock />
    </PicContainer>
  );
};

export default PictureContainer;
