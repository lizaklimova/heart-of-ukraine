import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  approveHelpRequest,
  rejectHelpRequest,
  completeHelpRequest,
} from "api";
import {
  DetailsBlock,
  TimeWrap,
  DetailsList,
  BtnsBlock,
  RejectBtn,
} from "./ApplicantDetails.styled";
import { formatDate, formatTime } from "helpers";

const ApplicantDetails = ({
  data: {
    comment,
    createdAt,
    email,
    firstName,
    isApproved,
    lastName,
    phoneNumber,
    region,
    userId,
  },
  reqId,
  isInProcess,
  isCompleted,
  setExecutorsDetails,
  variant,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const approveReq = async () => {
    const body = {
      firstName,
      lastName,
      phoneNumber,
      region: region.regionEn,
      comment,
    };
    await approveHelpRequest({ reqId, userId, body });
    setExecutorsDetails((prev) => prev.filter((obj) => obj.reqId === reqId));
    navigate(location?.pathname);
  };

  const submitSuccessfulReq = async () => {
    await completeHelpRequest({ reqId });
    navigate(location?.pathname);
  };

  const rejectReq = async () => {
    await rejectHelpRequest({ reqId, userId });
    setExecutorsDetails((prev) => prev.filter((obj) => obj.reqId !== reqId));
    navigate(location?.pathname);
  };

  return (
    <DetailsBlock
      $isApproved={isApproved}
      $variant={variant}
      $isCompleted={isCompleted}
    >
      <TimeWrap $isCompleted={isCompleted} $isApproved={isApproved}>
        <p>{formatDate(createdAt)}</p>
        <time>{formatTime(createdAt)}</time>
      </TimeWrap>

      <DetailsList $isApproved={isApproved} $isCompleted={isCompleted}>
        <li>
          <div>
            <p>{t("confirmationModal.name")}</p>
            <span>{firstName}</span>
          </div>
        </li>
        <li>
          <div>
            <p>{t("confirmationModal.surnameDetail")}</p>
            <span>{lastName}</span>
          </div>
        </li>
        <li>
          <div>
            <p>{t("confirmationModal.shortPhone")}</p>
            <span>{phoneNumber}</span>
          </div>
        </li>
        <li>
          <div className="region">
            <p>{t("confirmationModal.region")}</p>

            <span>
              {i18n.language === "uk"
                ? region.regionUa.toLowerCase()
                : region.regionEn.toLowerCase()}
            </span>
          </div>
        </li>

        {comment && (
          <li>
            <div>
              <p>{t("confirmationModal.comment")}</p>
              <span>{comment}</span>
            </div>
          </li>
        )}
      </DetailsList>

      {variant === "requests" && (
        <BtnsBlock>
          {!isCompleted && (
            <button
              type="button"
              className="accent-button"
              onClick={
                isInProcess && isApproved ? submitSuccessfulReq : approveReq
              }
            >
              {isInProcess && isApproved
                ? t("profile.tasks.applicationDone")
                : t("profile.tasks.takeRequest")}
            </button>
          )}

          {!isCompleted && !isApproved && (
            <RejectBtn type="button" onClick={rejectReq}>
              {t("profile.tasks.reject")}
            </RejectBtn>
          )}
        </BtnsBlock>
      )}
    </DetailsBlock>
  );
};

export default ApplicantDetails;
