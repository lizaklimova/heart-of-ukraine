import sprite from "assets/icons/sprite.svg";
import { ShowBtn } from "./ShowPasswordBtn.styled";

const ShowPasswordBtn = ({ isPwdShown, setPwdShown, variant }) => {
  return (
    <ShowBtn
      type="button"
      aria-label="Show password"
      onClick={() => setPwdShown((prev) => !prev)}
      $variant={variant}
    >
      <svg width={20} height={20}>
        <use
          href={`${sprite}#${isPwdShown ? "icon-eye-open" : "icon-eye-slash"}`}
        ></use>
      </svg>
    </ShowBtn>
  );
};

export default ShowPasswordBtn;
