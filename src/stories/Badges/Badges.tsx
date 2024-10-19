import React from "react";
import Tasks from "./Tasks/Tasks.tsx";
import Notifications from "./Notifications/Notifications.tsx";
import Requests from "./Requests/Requests.tsx";
import Documents from "./Documents/Documents.tsx";
import Reports from "./Reports/Reports.tsx";
import "./Badges.scss";

interface IDocuments {
  dms: number,
  cms: number
}

interface RequestsProps {
  /**
   * Number of tasks type
   */
  tasks: number,
  /**
   * Number of notifications type
   */
  notifications: number,
  /**
   * Number of requests type
   */
  requests: number,
  /**
   * Number of documents type
   */
  documents: IDocuments,
  /**
   * Number of reports type
   */
  reports: number,
  /**
   * Loading action while component finishing load
   */
  loading: boolean
}

const Badges = ({ tasks, notifications, requests, documents, reports }: RequestsProps) => {

  return (
    <div className="badge-container">
      <div className="badge">
        <Tasks tasks={tasks} />
      </div>
      <div className="badge">
        <Notifications notifications={notifications} />
      </div>
      <div className="badge">
        <Requests requests={requests} />
      </div>
      <div className="badge">
        <Documents dms={documents.dms} cms={documents.cms} />
      </div>
      <div className="badge">
        <Reports reports={reports} />
      </div>
    </div>
  );
};

Badges.defaultProps = {
  tasks: 0,
  notifications: 0,
  requests: 0,
  documents: {
    dms: 0,
    cms: 0
  },
  reports: 0,
}

export default Badges;
