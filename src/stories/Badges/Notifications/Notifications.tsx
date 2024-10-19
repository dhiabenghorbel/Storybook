import React from "react";
import CircularButton from "./../CircularButton/CircularButton.tsx";
import LoadingSpinner from '../../Loading/LoadingSpinner.tsx'

interface NotificationProps {
  /**
   * Number of elements
   */
  notifications: number,
  /**
   * Loading action while component finishing load
   */
  loading: boolean
}

const Notifications = ({ notifications, loading }: NotificationProps) => {

  let content = false;
  if (notifications > 0) {
    content = loading ? <LoadingSpinner type="badge" /> : notifications;
  }

  return (
    <div>
      <CircularButton
        content={content}
        icon="bell"
        value="label.task"
      />
    </div>
  );
};

Notifications.defaultProps = {
  notifications: 0,
  loading: false
}

export default Notifications;
