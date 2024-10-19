import React, { Fragment, ReactNode } from 'react';
import Icon from '../Icon/Icon.tsx';
import './snackbarToast.scss';
import classnames from 'classnames';

interface SnackBarToastProps {
  onClose: Function,
  message: ReactNode,
  open: boolean,
  variant: "success" | "error" | "info" | "warning",
}

const SnackBarToast = ({ open, onClose, message, variant }: SnackBarToastProps) => {

  return (
    <div 
      className={classnames(
        'snackbar-container',
        `${variant}`,
        { 'snackbar-show': open }
        )}
    >
      <p className="snackbar-message">{message}</p>
      <Icon 
        onClick={() => onClose()}
        name="times" 
        light
      />
    </div>
  );
};

SnackBarToast.defaultProps = {
  open: true,
  onClose: () => {},
  message: <Fragment />,
  variant: 'info',
};

export default SnackBarToast;
