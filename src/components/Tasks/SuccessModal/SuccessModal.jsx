import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sprite from "assets/icons/sprite.svg";
import {
  Backdrop,
  Modal,
  ModalLink,
  ModalPic,
  ModalText,
  ModalTitle,
} from "./SuccessModal.styled";

const SuccessModal = ({
  variant,
  setShowSuccessModal,
  title,
  text,
  accentBtnText,
  setShouldResetElements,
}) => {
  const location = useLocation();
  const { t } = useTranslation();

  const closeModal = () => {
    setShowSuccessModal(false);
    document.body.style.overflow = "visible";
    if (variant === "create") {
      setShouldResetElements(true);
    }
  };

  useEffect(() => {
    const handleESCClose = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleESCClose);

    return () => {
      document.removeEventListener("keydown", handleESCClose);
    };
  }, [closeModal]);

  return (
    <Backdrop
      onClick={({ target, currentTarget }) => {
        if (target === currentTarget) closeModal();
      }}
    >
      <Modal>
        <button
          id="close"
          type="button"
          aria-label="Close modal"
          onClick={closeModal}
        >
          <svg width={48} height={48}>
            <use href={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        <ModalTitle>{t(title)}</ModalTitle>
        <ModalText>{t(text)}</ModalText>
        <ModalPic width={177} height={177}>
          <use href={`${sprite}#icon-success`}></use>
        </ModalPic>

        <ModalLink
          to={
            variant === "apply"
              ? `/profile/responses${
                  location?.pathname === "/needHelp" ? "/need" : "/provide"
                }`
              : "/"
          }
          state={{ from: location }}
          className="accent-button"
          onClick={() => (document.body.style.overflow = "visible")}
        >
          {t(accentBtnText)}
        </ModalLink>

        {variant === "apply" && (
          <ModalLink
            to="/"
            className="secondary-button"
            state={{ from: location }}
            onClick={() => (document.body.style.overflow = "visible")}
          >
            {t("createTask.successWindow.backHome")}
          </ModalLink>
        )}
      </Modal>
    </Backdrop>
  );
};

export default SuccessModal;
