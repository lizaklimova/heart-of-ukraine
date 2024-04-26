import { TailSpin } from "react-loader-spinner";

const SmallSpinner = ({ width, height, color = "#fff" }) => {
  return (
    <TailSpin
      visible={true}
      height={width}
      width={height}
      color={color}
      ariaLabel="tail-spin-loading"
      radius="1"
    />
  );
};

export default SmallSpinner;
