import Modal from "react-modal";
import { XModalIcon } from "src/assets/icons";
import { useEffect } from "react";
import { useWindowWidth } from "src/hooks/useWindowWidth";
import { useTranslation } from "react-i18next";
import {
  ButtonCloseModal,
  CancelBtn,
  ModalBtnsWrap,
  ModalContentWrap,
  ModalHeader,
  ModalText,
  ModalTextWrap,
  ReturnBtn,
} from "./WarningModal.styled";

const WarningModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const windowWidth = useWindowWidth();

  const modalContentStyles = {
    width: "361px",
    height: "541px",
    padding: "78px 20px 59px 20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F9F9FC",
    borderRadius: "16px",
    boxShadow: "0 4px 12px 0 rgba(112, 122, 167, 0.25)",
    ...(windowWidth >= 768 && {
      width: "616px",
      padding: "106px 50px 106px 50px",
    }),
    ...(windowWidth >= 1440 && {
      width: "926px",
      height: "483px",
      padding: "80px 136px 70px 136px",
    }),
  };

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <Modal
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.53)" },
        content: modalContentStyles,
      }}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <ButtonCloseModal onClick={onClose}>
        <XModalIcon />
      </ButtonCloseModal>
      {isOpen && (
        <ModalContentWrap>
          <ModalTextWrap>
            <ModalHeader>{t("profile.change.modal.title")}</ModalHeader>
            <ModalText>
              {t("profile.change.modal.unsaved")}
              <br />
              {t("profile.change.modal.dataLoss")}
            </ModalText>
            <ModalText>{t("profile.change.modal.confirmation")}</ModalText>
          </ModalTextWrap>
          <ModalBtnsWrap>
            <CancelBtn to="/profile/personal" className="accent-button">
              {t("profile.change.modal.cancel")}
            </CancelBtn>
            <ReturnBtn type="button" onClick={onClose}>
              {t("profile.change.modal.return")}
            </ReturnBtn>
          </ModalBtnsWrap>
        </ModalContentWrap>
      )}
    </Modal>
  );
};

export default WarningModal;
