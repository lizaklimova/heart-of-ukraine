import ScrollIcon from "assets/icons/ScrollIcon";
import StyledScroll from "./Scroll.styled";

const Scroll = () => {
  return (
    <>
      <StyledScroll smooth component={<ScrollIcon />} />
    </>
  );
};

export default Scroll;
