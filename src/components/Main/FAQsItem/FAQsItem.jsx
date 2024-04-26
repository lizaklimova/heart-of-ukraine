import { useState } from "react";
import sprite from "assets/icons/sprite.svg";
import {
  ArrowFAQSvg,
  FAQAnswer,
  FAQh3,
  QuestionWrap,
  SvgWrapButton,
} from "./FAQsItem.styled";

const FAQsItem = ({ question }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li>
      <QuestionWrap
        onClick={toggleDropdown}
        className={isDropdownOpen ? "open" : ""}
      >
        <FAQh3 className={isDropdownOpen ? "open" : ""}>
          {question.question}
        </FAQh3>
        <SvgWrapButton>
          <ArrowFAQSvg>
            <use
              href={`${sprite}#${
                isDropdownOpen ? "icon-arrow-up" : "icon-arrow-bottom"
              }`}
            />
          </ArrowFAQSvg>
        </SvgWrapButton>
      </QuestionWrap>
        <FAQAnswer className={isDropdownOpen ? "open" : ""}>
          {question.answer}
        </FAQAnswer>
    </li>
  );
};

export default FAQsItem;
