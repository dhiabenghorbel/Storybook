import React, { ReactNode } from "react";
import classnames from 'classnames';
import "./Backdrop.scss";

interface BackdropProps {
    /**
     * Show or hide the element
     */
    children: ReactNode,
    showing: boolean,
    /**
     * Show or hide the element
     */
    onClick: (Event) => void,
}

const Backdrop = ({ showing, children, onClick }: BackdropProps) => (
    <React.Fragment>
        <div className={classnames(
            "backdrop",
            { "display-block": showing },
            { "display-none": !showing },
        )}
            onClick={onClick}
        />
        <div className={showing ? "backdrop-blur" : ""} >
        {children}
        </div>
    </React.Fragment>
);

Backdrop.defaultProps = {
    showing: true,
    children: <React.Fragment/>,
    onClick: () => { },
};

export default Backdrop;
