import React, { ReactNode } from "react";
import LoadingWidget from "./Loading/LoadingWidget.tsx";
import classnames from "classnames";

interface WidgetFrameProps {
  children: ReactNode;
  loading: boolean;
  twitter: boolean;
}

const WidgetFrame = ({ children, loading, twitter }: WidgetFrameProps) => (
  <div className={classnames("full-width", { "twitter-container": twitter })}>{loading ? <LoadingWidget /> : children}</div>
);

WidgetFrame.defaultProps = {
  children: <React.Fragment />,
  loading: false,
  twitter: false
};

export default WidgetFrame;
