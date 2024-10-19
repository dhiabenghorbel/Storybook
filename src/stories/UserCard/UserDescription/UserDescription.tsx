import React from 'react';
import constants from  "../../../GP4You/constants";
import './UserDescription.scss';
import LoadingSpinner from '../../Loading/LoadingSpinner.tsx';
import "../../../"

interface UserDescriptionProps {
  matcle: string,
  nmpres: string,
  loading: boolean,
  itemList: boolean,
  numero: string
}

const UserDescription = ({ matcle, nmpres, numero, loading, itemList }: UserDescriptionProps) => {

  if (itemList) {
    return (
      <div className='outerDescription'>
        <div className='description text-black'>
          <span>
            {constants.shouldShowUserName &&
              <React.Fragment>
                <span className='info-item-list'>
                  {loading ? <LoadingSpinner type="small" /> : nmpres}
                </span>
              </React.Fragment>
            }
            {constants.shouldShowUserMatcle &&
              <React.Fragment>
                <span className='info-item-list'>
                  {loading ? <LoadingSpinner type="small" /> : matcle}
                </span>
              </React.Fragment>
            }
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className='outerDescription' >
      <div className='description'>
        <span>
          {constants.shouldShowUserName &&
          <React.Fragment>
            <div className='header-text'>
              <strong>
                {/*<FormattedMessage id="nomEtPrenom" defaultMessage="Nombre" />*/}
                Full Name
                &nbsp; : &nbsp;
              </strong>
            </div>
            <div className='info'>
              {loading ? <LoadingSpinner type="small" /> : nmpres}
            </div>
          </React.Fragment>
          }
          {constants.shouldShowUserMatcle &&
          <React.Fragment>
            <div className='header-text'>
              <strong>
                {/*<FormattedMessage id="label-Identificador" defaultMessage="Identificador" />*/}
                ID
                : &nbsp;
              </strong>
            </div>
            <div className='info'>
              {loading ? <LoadingSpinner type="small" /> : matcle}
            </div>
          </React.Fragment>
          }
          {constants.shouldShowUserNumber &&
          <React.Fragment>
            <div className='header-text'>
              <strong>
                {/* <FormattedMessage id="label-numero-ss" defaultMessage="Número S.S." /> */}
                : &nbsp;
              </strong>
            </div>
            <div className='info'>
              {loading ? <LoadingSpinner type="small"/> : numero}
            </div>
          </React.Fragment>
        }
        </span>
      </div>
    </div>
  );
};

UserDescription.defaultProps = {
  loading: false,
  matcle : "001078954",
  nmpres : "Fernando Torres",
  itemList : false,
};

export default UserDescription;
