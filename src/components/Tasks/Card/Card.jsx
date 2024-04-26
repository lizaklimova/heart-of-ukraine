import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getImages, cancelHelpRequest } from "api";
import { formatDate, formatTime, determineUsersQnty } from "helpers";
import { STATUSES_VALUES } from "constants";
import { selectEmail } from "src/redux/auth/authSelectors";
import sprite from "assets/icons/sprite.svg";
import listArrow from "assets/images/tasks/list-arrow.svg";
import DetailsDots from "src/assets/icons/DetailsDots";
import { PersonIcon } from "src/assets/icons";
import {
  CardItem,
  ApplyButtonsWrap,
  ApplyForHelpBtn,
  CardBlock,
  CategoriesList,
  CloseDetailsBtn,
  DateMobWrap,
  DateWrap,
  OfferDescription,
  OfferTitle,
  PicturesBlock,
  SeeDetailsButton,
  UserDateWrap,
  UserWrap,
  ActionsBlock,
} from "./Card.styled";
import StatusTag from "../StatusTag";
import ApplicantDetails from "src/components/Profile/Tabs/MyTasks/ApplicantDetails/ApplicantDetails";
import { NewTasksWrap } from "src/components/Profile/Tabs/MyTasks/MyTasks.styled";
import {
  DetailsMsgWrap,
  DetailsQntyCircle,
  DetailsText,
  HideDetailsBtn,
} from "src/components/Profile/Tabs/MyTasks/ApplicantDetails/ApplicantDetails.styled";
// import { SvgLogoUserHeader } from "src/components/Header/Header.styled";

const Card = ({
  requestData: {
    categories,
    createdAt,
    description,
    images,
    region,
    requestType,
    requestStatus,
    title,
    comment,
    id,
    executors,
    authorFirstName,
    authorLastName,
    authorImageId,
    authorEmail,
    authorDetails,
  },
  desktop,
  status,
  variant,
  responses,
  setRequestId,
  setIsConfirmApplicationOpen,
  setExecutorsDetails,
  executorsDetails,
}) => {
  const [areDetailsShown, setAreDetailsShown] = useState(false);
  const [isTextOverflowing, setIsTextOverflowing] = useState(false);
  const [detailsImage, setDetailsImage] = useState([]);
  const [areApplicantDetailsShown, setAreApplicantDetailsShown] =
    useState(false);
  const [authorAvatar, setAuthorAvatar] = useState(null);
  const [areActionsShown, setAreActionsShown] = useState(false);

  const { t, i18n } = useTranslation();
  const cardRef = useRef();
  const descriptionRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const userEmail = useSelector(selectEmail);

  useEffect(() => {
    const description = descriptionRef?.current;

    if (description) {
      const isOverflowing = description.scrollHeight > description.clientHeight;
      setIsTextOverflowing(isOverflowing);
    }
  }, [descriptionRef]);

  useEffect(() => {
    const getPics = async () => {
      images.forEach(async (_, index) => {
        const result = await getImages(images[index]);
        setDetailsImage((prev) => [...prev, result]);
      });
    };

    if (images.length || images) {
      getPics();
    }
  }, [images]);

  useEffect(() => {
    const getUserAvatar = async () => {
      const result = await getImages(authorImageId);
      setAuthorAvatar(result);
    };

    if (authorImageId) {
      getUserAvatar();
    }
  }, [setAuthorAvatar]);

  const cancelReq = async () => {
    await cancelHelpRequest({ id });
    navigate(location?.pathname);
  };

  return (
    <CardItem
      id={id}
      ref={cardRef}
      $desktop={desktop}
      className={areDetailsShown ? "opened" : ""}
    >
      <CardBlock className={areDetailsShown ? "opened" : ""}>
        {status && <StatusTag tag={requestStatus.requestStatusEn} />}
        <UserDateWrap>
          <UserWrap>
            {authorAvatar ? (
              <img
                src={`data:image/jpeg;charset=utf-8;base64,${authorAvatar}`}
                alt="user avatar"
              />
            ) : (
              <div>
                <PersonIcon width={20} height={20} />
              </div>
            )}
            <p>
              {authorFirstName} {authorLastName}
            </p>
          </UserWrap>

          <DateWrap $status={status}>
            <p>{formatDate(createdAt)}</p>
            <time>{formatTime(createdAt)}</time>
            {status &&
              requestStatus.requestStatusEn !== STATUSES_VALUES.done &&
              requestStatus.requestStatusEn !== STATUSES_VALUES.canceled &&
              authorEmail === userEmail && (
                <>
                  <button
                    className="details-button"
                    type="button"
                    aria-label="See detail actions"
                    onClick={() => setAreActionsShown((prev) => !prev)}
                  >
                    <DetailsDots />
                  </button>

                  {areActionsShown && (
                    <ActionsBlock>
                      <Link
                        state={{
                          from:
                            requestType.requestTypeEn === "OFFER"
                              ? "/wantToHelp"
                              : "/needHelp",
                        }}
                        to={`/createTask?reqId=${id}&reqType=${requestType.requestTypeEn}`}
                        onClick={() =>
                          localStorage.setItem(
                            "updateDetails",
                            JSON.stringify({
                              reqId: id,
                              reqType: requestType.requestTypeEn,
                              categories: categories.map((el) => el.id),
                              region: [region.regionEn],
                              title,
                              description,
                              comment,
                            })
                          )
                        }
                      >
                        <svg width={24} height={24}>
                          <use href={`${sprite}#icon-edit-pencil`}></use>
                        </svg>
                        {t("profile.tasks.update")}
                      </Link>
                      {status &&
                        requestStatus.requestStatusEn ===
                          STATUSES_VALUES.active && (
                          <button type="button" onClick={cancelReq}>
                            <svg width={24} height={24}>
                              <use href={`${sprite}#icon-cancel`}></use>
                            </svg>
                            {t("profile.tasks.cancel")}
                          </button>
                        )}
                    </ActionsBlock>
                  )}
                </>
              )}
          </DateWrap>
        </UserDateWrap>

        <OfferTitle $isTextHidden={areDetailsShown}>{title}</OfferTitle>

        <CategoriesList>
          {categories.map(({ id, iconTag }, index) => (
            <li key={`${id}/${index}`}>
              <div>
                {iconTag && (
                  <svg width={19} height={19}>
                    <use href={`${sprite}#${iconTag}`}></use>
                  </svg>
                )}
              </div>
            </li>
          ))}
          <li>
            <div>
              <p>
                {i18n.language === "uk"
                  ? region.regionUa.toLowerCase()
                  : region.regionEn.toLowerCase()}
              </p>
            </div>
          </li>
        </CategoriesList>

        <OfferDescription ref={descriptionRef} $isTextHidden={areDetailsShown}>
          {description}
        </OfferDescription>

        {(isTextOverflowing || images.length > 0) && areDetailsShown && (
          <OfferDescription className="comment">{comment}</OfferDescription>
        )}

        {(!isTextOverflowing || images.length < 0) && !areDetailsShown && (
          <OfferDescription className="comment">{comment}</OfferDescription>
        )}

        {!status && (
          <DateMobWrap>
            <p>{formatDate(createdAt)}</p>
            <time>{formatTime(createdAt)}</time>
          </DateMobWrap>
        )}

        {!isTextOverflowing &&
          !status &&
          images.length === 0 &&
          authorEmail !== userEmail && (
            <ApplyForHelpBtn
              id="no-info"
              className="accent-button"
              type="button"
              onClick={() => {
                if (setIsConfirmApplicationOpen && setRequestId) {
                  setIsConfirmApplicationOpen(true);
                  setRequestId(id);
                  document.body.style.overflow = "hidden";
                }
              }}
            >
              {t("tasks.respondToHelp")}
            </ApplyForHelpBtn>
          )}

        {areDetailsShown && (
          <>
            <PicturesBlock>
              {images.map((_, index) => (
                <img
                  key={index}
                  src={`data:image/jpeg;charset=utf-8;base64,${detailsImage[index]}`}
                  alt="details preview"
                />
              ))}
            </PicturesBlock>

            {status && (
              <DateMobWrap className="profile-date">
                <p>{formatDate(createdAt)}</p>
                <time>{formatTime(createdAt)}</time>
              </DateMobWrap>
            )}

            <ApplyButtonsWrap>
              {!status && userEmail !== authorEmail && (
                <ApplyForHelpBtn
                  className="accent-button"
                  type="button"
                  onClick={() => {
                    if (setIsConfirmApplicationOpen && setRequestId) {
                      setIsConfirmApplicationOpen(true);
                      setRequestId(id);
                      document.body.style.overflow = "hidden";
                    }
                  }}
                >
                  {t("tasks.respondToHelp")}
                </ApplyForHelpBtn>
              )}

              <CloseDetailsBtn
                className="accent-text"
                type="button"
                onClick={() => setAreDetailsShown(false)}
              >
                {t("tasks.hide")}
                <img src={listArrow} alt="list arrow" />
              </CloseDetailsBtn>
            </ApplyButtonsWrap>
          </>
        )}

        {(isTextOverflowing || images.length > 0) && !areDetailsShown && (
          <SeeDetailsButton
            className="accent-text"
            type="button"
            onClick={() => setAreDetailsShown(true)}
          >
            {t("tasks.seeDetails")}
            <img src={listArrow} alt="list arrow" />
          </SeeDetailsButton>
        )}
      </CardBlock>

      {status &&
        !areApplicantDetailsShown &&
        requestStatus.requestStatusEn === STATUSES_VALUES.inProcess &&
        !responses && (
          <NewTasksWrap>
            <div>{executors.length}</div>
            <p>{t(`profile.tasks.${determineUsersQnty(executors.length)}`)}</p>
            <button
              type="button"
              className="accent-button"
              onClick={() => {
                setAreApplicantDetailsShown(true);
                setExecutorsDetails(
                  executors.map((obj) => ({
                    ...obj,
                    reqId: id,
                    requestType: requestType.requestTypeEn,
                  }))
                );
              }}
            >
              {t("profile.tasks.see")}
            </button>
          </NewTasksWrap>
        )}

      {status &&
        executors.length > 0 &&
        requestStatus.requestStatusEn !== STATUSES_VALUES.inProcess &&
        requestStatus.requestStatusEn !== STATUSES_VALUES.active &&
        executors.map((executor) => (
          <ApplicantDetails
            key={executor.userId}
            data={executor}
            reqId={id}
            variant={variant}
            userId={executor.id}
            isInProcess
            isCompleted={requestStatus.requestStatusEn === STATUSES_VALUES.done}
            setExecutorsDetails={setExecutorsDetails}
          />
        ))}

      {status &&
        areApplicantDetailsShown &&
        requestStatus.requestStatusEn === STATUSES_VALUES.inProcess &&
        !responses && (
          <div>
            <DetailsMsgWrap>
              <DetailsQntyCircle>{executors.length}</DetailsQntyCircle>
              <DetailsText>
                {t(`profile.tasks.${determineUsersQnty(executors.length)}`)}
              </DetailsText>
            </DetailsMsgWrap>

            {executorsDetails?.map((executor) => (
              <ApplicantDetails
                key={executor.userId}
                data={executor}
                reqId={executor.reqId}
                variant={variant}
                setExecutorsDetails={setExecutorsDetails}
              />
            ))}

            <HideDetailsBtn
              type="button"
              onClick={() => setAreApplicantDetailsShown(false)}
            >
              <p>{t("profile.tasks.hideResponses")}</p>
              <svg width={24} height={26}>
                <use href={`${sprite}#icon-hide-arrow`}></use>
              </svg>
            </HideDetailsBtn>
          </div>
        )}
    </CardItem>
  );
};
export default Card;
