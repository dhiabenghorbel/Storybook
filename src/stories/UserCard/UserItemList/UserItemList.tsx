import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar.tsx';
import avatar from "../../../media/user.png";
import UserDescription from '../UserDescription/UserDescription.tsx';
import * as PropTypes from "prop-types";
import classnames from 'classnames';
import './UserItemList.scss';



interface UserCardProps {
  selected:boolean,
  loading :boolean,
  defaultStyle :boolean,
  onClick : Function,
  userInfo: object,
  fullName: boolean
}

const UserItemList = ({ fullName, userInfo, loading, onClick, selected, defaultStyle } : UserCardProps) => {

  // let name = fullName ? userInfo.fullName : userInfo.name;

  return (
    <div className={classnames(
      "flex-row-start",
      {"user-item": defaultStyle},
      { "user-item-selected": selected }
    )}
      onClick={onClick}>
      <UserAvatar
        loading={loading}
        photo={avatar}
      />
      <UserDescription
        matcle={userInfo['@matcle']}
        nmpres={userInfo['@nomemp']}
        // numero={userInfo.numero}
        loading={loading}
      />
    </div>
  )
}

UserItemList.propTypes = {
  loading: PropTypes.bool,
  selected:PropTypes.bool,
  defaultStyle:PropTypes.bool,
  onClick: PropTypes.func,
  userInfo: PropTypes.object,
};

UserItemList.defaultProps = {
  userInfo: { photoUrl: avatar },
  loading: false,
  selected:false,
  defaultStyle:true
};

export default UserItemList;
