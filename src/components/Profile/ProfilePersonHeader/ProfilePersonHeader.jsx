import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import {
  selectUserFistName,
  selectUserLastName,
  selectUserOrganization,
} from "../../../redux/auth/authSelectors";
import {
  AvatarNameWrap,
  PersonInfoWrap,
  PersonName,
  PersonOrg,
} from "./ProfilePersonHeader.styled";

const ProfilePersonHeader = () => {
  const userFirstName = useSelector(selectUserFistName);
  const userLastName = useSelector(selectUserLastName);
  const userOrganization = useSelector(selectUserOrganization);
  return (
    <AvatarNameWrap>
      <Avatar />
      <PersonInfoWrap>
        <PersonName>
          {userFirstName} {userLastName}
        </PersonName>
        {userOrganization ? <PersonOrg>{userOrganization}</PersonOrg> : null}
      </PersonInfoWrap>
    </AvatarNameWrap>
  );
};

export default ProfilePersonHeader;
