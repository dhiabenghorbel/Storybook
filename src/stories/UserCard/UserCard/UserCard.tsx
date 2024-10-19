import React from "react";
import UserAvatar from "../UserAvatar/UserAvatar.tsx";
import UserDescription from "../UserDescription/UserDescription.tsx";
import avatar from '../../../media/user.png';
import constants from "../../../GP4You/constants";
import * as PropTypes from "prop-types";
import "./userCard.scss";
import classnames from "classnames";


interface UserCardProps {
  userInfo:object;
  loading :boolean;
}

const UserCard = ({ userInfo, loading } : UserCardProps) => (
  <div className={classnames("user-card", { "header-box": constants.isHeaderBoxEnabled })}>
    {constants.shouldShowUserPic && <UserAvatar loading={loading} photo={userInfo.photoUrl} />}

    <UserDescription matcle={userInfo.matcle} nmpres={userInfo.nmpres} numero={userInfo.numero} loading={loading} />
  </div>
);

UserCard.propTypes = {
  loading: PropTypes.bool,
};

UserCard.defaultProps = {
  userInfo: { photoUrl: avatar },
  loading: false,
};

export default UserCard;
