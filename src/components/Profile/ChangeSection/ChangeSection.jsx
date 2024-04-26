import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MAX_FILE_SIZE_BYTES } from "src/constants";
import { selectUserAvatar } from "../../../redux/auth/authSelectors";
import { getImages } from "api";
import { getCurrentThunk } from "../../..//redux/auth/authOperations";
import { useTranslation } from "react-i18next";
import { changeAvatar } from "src/api";
import Avatar from "../ProfilePersonHeader/Avatar";
import ChangeForm from "./ChangeForm";
import {
  ChangePhotoLabel,
  ChangeWrap,
  ErrorSizeMsg,
} from "./ChangeSection.styled";
import { ScrollWrap } from "../Tabs/MyTasks/MyResponses/MyResponses.styled";

const ChangeSection = () => {
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);
  const [maximumSizeExceeded, setMaximumSizeExceeded] = useState(false);

  const { t } = useTranslation();
  const userAvatar = useSelector(selectUserAvatar);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserAvatar = async () => {
      const result = await getImages(userAvatar);
      setUserAvatarUrl(result);
    };

    if (userAvatar) {
      getUserAvatar();
    }
  }, [setUserAvatarUrl]);

  const onAttachingAvatar = async (event) => {
    const file = event.target.files[0];

    if (file.size <= MAX_FILE_SIZE_BYTES) {
      setMaximumSizeExceeded(false);
      await changeAvatar(file);
      dispatch(getCurrentThunk());
    } else {
      setMaximumSizeExceeded(true);
    }
  };

  return (
    <ScrollWrap className="change">
      <ChangeWrap>
        <ChangePhotoLabel htmlFor="avatar" className="accent-text">
          <Avatar classN={"change"} avatar={userAvatarUrl} />
          {t("profile.change.photo")}
          <input
            name="file"
            id="avatar"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={onAttachingAvatar}
          />
        </ChangePhotoLabel>
        {maximumSizeExceeded && (
          <ErrorSizeMsg>{t("createTask.validation.fileMaxSize")}</ErrorSizeMsg>
        )}
        <ChangeForm />
      </ChangeWrap>
    </ScrollWrap>
  );
};

export default ChangeSection;
