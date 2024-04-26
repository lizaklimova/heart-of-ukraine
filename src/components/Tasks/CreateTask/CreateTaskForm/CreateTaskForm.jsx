import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import {
  OFFER_TYPE,
  REQUEST_TYPE,
  MAX_IMAGES_QTY,
  MAX_FILE_SIZE_BYTES,
  MAX_TOTAL_SIZE_BYTES,
} from "constants";
import { createTaskSchema } from "schemas";
import { sendNewTask, updateHelpRequest } from "api/requests";
import sprite from "assets/icons/sprite.svg";
import AddAttachmentIcon from "assets/icons/AddAttachmentIcon";
import SearchFiltersList from "components/Tasks/SearchFiltersList";
import SmallSpinner from "components/Loaders/SmallSpinner";
import SuccessModal from "../../SuccessModal";
import {
  CreateForm,
  TextAreaLabel,
  TextArea,
  AttachmentBlock,
  PostBtn,
  AttachmentList,
  ErrorMsg,
  MobTabPositioningWrap,
  DeskPositioningWrap,
  PositionWrap,
  TextAreasWrap,
  AttachmentBtnWrap,
} from "./CreateTaskForm.styled";

const CreateTaskForm = ({
  setCategoriesFilters,
  setRegionsFilters,
  categories,
  region,
  variant,
}) => {
  const [areCategoriesEmpty, setAreCategoriesEmpty] = useState(false);
  const [isRegionEmpty, setIsRegionEmpty] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploadedSizeExceed, setIsUploadedSizeExceed] = useState(false);
  const [isQntyExceeded, setIsQntyExceded] = useState(false);
  const [shouldResetElements, setShouldResetElements] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showEditSuccessModal, setShowEditSuccessModal] = useState(false);
  const [defaultValues, setDefaultValues] = useState(
    () =>
      JSON.parse(localStorage.getItem("updateDetails")) ?? {
        reqId: null,
        reqType: null,
        title: "",
        description: "",
        comment: "",
        region: [],
        categories: [],
      }
  );

  const navigate = useNavigate();
  const formRef = useRef(null);
  const { t } = useTranslation();
  const [urlParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (urlParams.get("reqId") || defaultValues.title) {
      setCategoriesFilters(defaultValues.categories);
      setRegionsFilters(defaultValues.region);
    } else {
      localStorage.removeItem("updateDetails");
    }
  }, [
    defaultValues.title,
    defaultValues.categories,
    defaultValues.region,
    setCategoriesFilters,
    setRegionsFilters,
    urlParams,
  ]);

  const onSubmit = async ({ title, description, comment }, actions) => {
    const requestType = defaultValues.reqType
      ? defaultValues.reqType
      : variant === "/needHelp"
      ? REQUEST_TYPE
      : OFFER_TYPE;

    const formData = {
      title,
      categoryIds: categories.map((string) => parseInt(string, 10)),
      region: region[0],
      description,
      comment,
      requestType,
    };

    const isFormDataValid = await createTaskSchema.isValid(formData);
    if (!isFormDataValid) return;

    if (defaultValues.reqId) {
      await updateHelpRequest({
        id: defaultValues.reqId,
        body: formData,
      });

      setShowEditSuccessModal(true);
      setDefaultValues({
        reqId: null,
        reqType: null,
        title: "",
        description: "",
        comment: "",
        region: [],
        categories: [],
      });
      navigate("/profile/requests");
    } else {
      await sendNewTask(formData, uploadedFiles);
      setShowSuccessModal(true);
      document.body.style.overflow = "hidden";
      setShouldResetElements(false);
    }

    actions.resetForm();
    setRegionsFilters([]);
    setCategoriesFilters([]);

    const { category, region: regs } = formRef?.current?.elements;
    category.forEach((element) => (element.checked = false));
    regs.forEach((reg) => (reg.checked = false));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const previews = [];

    const reader = new FileReader();

    if (file?.size > MAX_FILE_SIZE_BYTES) {
      setIsUploadedSizeExceed(true);

      setTimeout(() => setIsUploadedSizeExceed(false), 5000);
      return;
    }

    reader.onload = (e) => {
      const preview = e.target.result;
      const totalSize = previews.reduce((acc, curr) => acc + curr.size, 0);

      if (totalSize + file.size > MAX_TOTAL_SIZE_BYTES) {
        return;
      }

      if (
        previews.length >= MAX_IMAGES_QTY ||
        imagePreviews.length >= MAX_IMAGES_QTY
      ) {
        setIsQntyExceded(true);
        setTimeout(() => setIsQntyExceded(false), 5000);
        return;
      }

      setIsUploadedSizeExceed(false);
      setIsQntyExceded(false);
      previews.push(file);
      setImagePreviews((prev) => [...prev, preview]);
      setUploadedFiles((prev) => [...prev, file]);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = (prevStr) => {
    if (!imagePreviews.length) {
      setIsUploadedSizeExceed(false);
      setIsQntyExceded(false);
    }

    setImagePreviews((prev) => prev.filter((img) => img !== prevStr));
  };

  const checkEmptyFields = () => {
    if (!region.length) {
      setIsRegionEmpty(true);
    }
    if (!categories.length) {
      setAreCategoriesEmpty(true);
    }
  };

  const CREATE_TASK_INIT_VALUES = {
    title: defaultValues.title,
    description: defaultValues.description,
    comment: defaultValues.comment,
  };

  const { errors, touched, getFieldProps, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: CREATE_TASK_INIT_VALUES,
      validationSchema: createTaskSchema,
      onSubmit,
    });

  return (
    <>
      <CreateForm ref={formRef} onSubmit={handleSubmit}>
        <MobTabPositioningWrap>
          <TextAreaLabel>
            {t("createTask.name")}
            <TextArea
              id="name"
              name="title"
              placeholder={t("createTask.placeholder")}
              maxLength={300}
              {...getFieldProps("title")}
              className={errors.title && touched.title && "invalid"}
            ></TextArea>
            {errors.title && touched.title && (
              <ErrorMsg>{t(errors.title)}</ErrorMsg>
            )}
          </TextAreaLabel>
        </MobTabPositioningWrap>

        <SearchFiltersList
          showMore={false}
          isUpdating={defaultValues.reqId}
          variant="createTask"
          setCategoriesFilters={setCategoriesFilters}
          setRegionsFilters={setRegionsFilters}
          areCategoriesEmpty={areCategoriesEmpty}
          isRegionEmpty={isRegionEmpty}
          setAreCategoriesEmpty={setAreCategoriesEmpty}
          setIsRegionEmpty={setIsRegionEmpty}
          defaultCheckedCategories={defaultValues.categories}
          defaultCheckedRegions={defaultValues.region}
          shouldResetElements={shouldResetElements}
        />

        <PositionWrap>
          <TextAreasWrap>
            <DeskPositioningWrap>
              <TextAreaLabel>
                {t("createTask.name")}
                <TextArea
                  id="name"
                  name="title"
                  placeholder={t("createTask.placeholder")}
                  maxLength={100}
                  {...getFieldProps("title")}
                  className={errors.title && touched.title && "invalid"}
                ></TextArea>
                {errors.title && touched.title && (
                  <ErrorMsg>{t(errors.title)}</ErrorMsg>
                )}
              </TextAreaLabel>
            </DeskPositioningWrap>

            <TextAreaLabel>
              {t("createTask.descr")}
              <TextArea
                name="description"
                placeholder={t("createTask.placeholder")}
                maxLength={9000}
                {...getFieldProps("description")}
                className={
                  errors.description && touched.description && "invalid"
                }
              ></TextArea>
              {errors.description && touched.description && (
                <ErrorMsg>{t(errors.description)}</ErrorMsg>
              )}
            </TextAreaLabel>

            <TextAreaLabel>
              {t("createTask.additional")}
              <TextArea
                name="comment"
                maxLength={9000}
                placeholder={t("createTask.placeholder")}
                {...getFieldProps("comment")}
              ></TextArea>
              {errors.comment && touched.comment && (
                <ErrorMsg>{t(errors.comment)}</ErrorMsg>
              )}
            </TextAreaLabel>
          </TextAreasWrap>

          <AttachmentBtnWrap>
            {isUploadedSizeExceed && (
              <p className="upload-error">
                {t("createTask.validation.fileMaxSize")}
              </p>
            )}
            {isQntyExceeded && (
              <p className="upload-error">
                {t("createTask.validation.maxQnty")}
              </p>
            )}
            <AttachmentBlock
              className={
                isUploadedSizeExceed || isQntyExceeded ? "invalid" : ""
              }
            >
              <label
                className={
                  imagePreviews.length >= MAX_IMAGES_QTY ? "disabled" : ""
                }
              >
                <p> {t("createTask.addPic")}</p>
                <AddAttachmentIcon />
                <input
                  type="file"
                  name="attachment"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleImageChange}
                  disabled={imagePreviews.length >= MAX_IMAGES_QTY}
                />
              </label>
              <AttachmentList>
                {imagePreviews.map((preview, index) => (
                  <li key={index}>
                    <div>
                      <img src={preview} alt="Preview of uploaded file" />
                      <button
                        type="button"
                        aria-label="Delete image"
                        onClick={() => handleDeleteImage(preview)}
                      >
                        <svg width={16} height={16}>
                          <use href={`${sprite}#icon-delete-image`}></use>
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </AttachmentList>
            </AttachmentBlock>

            <div onClick={checkEmptyFields}>
              <PostBtn
                type="submit"
                className="accent-button"
                disabled={
                  isSubmitting ||
                  Object.keys(errors)?.length > 0 ||
                  region?.length <= 0 ||
                  categories?.length <= 0
                }
              >
                {isSubmitting ? (
                  <SmallSpinner width={20} height={20} />
                ) : (
                  t("createTask.post")
                )}
              </PostBtn>
            </div>
          </AttachmentBtnWrap>
        </PositionWrap>
      </CreateForm>

      {showSuccessModal && (
        <SuccessModal
          variant="create"
          title={"createTask.successWindow.congrat"}
          text={
            location?.state?.from
              ? location?.state?.from?.pathname === "/needHelp"
                ? "createTask.successWindow.textCreateRequest"
                : "createTask.successWindow.textCreateOffer"
              : "createTask.successWindow.textCreate"
          }
          accentBtnText={"createTask.successWindow.backHome"}
          setShowSuccessModal={setShowSuccessModal}
          setShouldResetElements={setShouldResetElements}
        />
      )}

      {showEditSuccessModal && (
        <SuccessModal
          variant="update"
          title={"createTask.successWindow.sent"}
          text={"createTask.successWindow.updatedText"}
          accentBtnText={"createTask.successWindow.backHome"}
          setShowSuccessModal={setShowEditSuccessModal}
        />
      )}
    </>
  );
};

export default CreateTaskForm;
