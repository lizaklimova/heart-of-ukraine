import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserAvatar } from "../../../../redux/auth/authSelectors";
import { getImages } from "api";
import { CameraIcon, PersonIcon } from "assets/icons";
import { AvatarHeader, CameraWrap } from "./Avatar.styled";

const Avatar = ({ classN, avatar }) => {
  const [userAvatarUrl, setUserAvatarUrl] = useState(null);
  const userAvatar = useSelector(selectUserAvatar);

  useEffect(() => {
    const getUserAvatar = async () => {
      const result = await getImages(userAvatar);
      setUserAvatarUrl(result);
    };

    if (userAvatar) {
      getUserAvatar();
    }
  }, [setUserAvatarUrl, userAvatar]);

  return (
    <AvatarHeader
      className={classN}
      $avatar={`data:image/jpeg;charset=utf-8;base64,${avatar}`}
    >
      {classN === "change" ? (
        <CameraWrap>
          <CameraIcon />
        </CameraWrap>
      ) : userAvatar ? (
        <img
          src={`data:image/jpeg;charset=utf-8;base64,${userAvatarUrl}`}
          alt="user avatar"
        />
      ) : (
        <PersonIcon width={75} height={70} />
      )}
    </AvatarHeader>
  );
};

export default Avatar;
