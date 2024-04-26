import { LoaderBackdrop, LoaderImg } from "./MainLoader.styled";
import spinnerImgPng from "src/assets/images/loader/spinner.png";

const MainLoader = () => {
  return (
    <LoaderBackdrop>
      <LoaderImg src={spinnerImgPng} alt="Loader" width={144} height={144} />
    </LoaderBackdrop>
  );
};

export default MainLoader;
