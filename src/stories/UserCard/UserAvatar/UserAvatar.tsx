import React from 'react';
import * as PropTypes from 'prop-types';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import avatar from '../../../media/user.png';
import * as constants from '../../../GP4You/constants';
import './UserAvatar.scss';
import classnames from 'classnames';
import Tooltip from '../../Tooltip/Tooltip.tsx';
import LoadingSpinner from '../../Loading/LoadingSpinner.tsx';

interface UserAvatarProps {
  loading :boolean;
  photo : string;
  itemList:boolean;
}


const UserAvatar = (props: UserAvatarProps) => {
  const { photo, loading, itemList } = props;

  /*const changePhoto = async (e) => {
    try {
      const file = e.target.files[0];
      const path = await fileResourceService.upload(file);
      const user = getPrimaryUser() ? getPrimaryUser() : getCurrentUser();
      const msg = await avatarService.changePhoto(path, user.name, user.dossier);
      const path = "";
      const user = "";
      const msg = "";
      throwSuccess(msg);
    } catch (err) {
      throwError(err.message || err.label || "error-upload-failed");
    }

  };*/
  
  return (
    <div className='containerImage'>
      {loading
        ? <div className='imgCircle'><LoadingSpinner type="default" /></div>
        : <img
          className={classnames(
            'imgCircle',
            { 'small-avatar': itemList },
          )}
          src={photo}
          alt="Avatar"
        />
      }
      {constants.isUserAvatarEnabled ?
        (
          <div className='span'>
            <label
              htmlFor='profile'
            >
              {!itemList && <div style={{ marginBottom: '0px' }}>
                <Tooltip position="bottom" text="editProfilePhoto">
                  <AddAPhoto
                    className='imgCircleSmall'
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      backgroundColor: 'white',
                      padding: '2px',
                      '&:hover': {
                        opacity: '0.3',
 
                       },
                     }}
                     /*onChange={e => changePhoto(e)}*/
                  />
                </Tooltip>
              </div>
              }
            </label>
            <div style={{ display: 'none' }}>
              <input id='profile' name='profile' type="file" /*onChange={e => changePhoto(e)}*/ />
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

UserAvatar.propTypes = {
  photo: PropTypes.string,
  loading: PropTypes.bool,
  itemList: PropTypes.bool,
};

UserAvatar.defaultProps = {
  photo: avatar,
  loading: false,
  itemList:false,
};

export default UserAvatar;
