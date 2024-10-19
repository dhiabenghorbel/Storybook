import React, { Fragment, ReactElement, ReactNode, useCallback, useState } from "react";
// import constants from "../../GP4You/constants";
import TOPICS from "../../app/services/topics";

export const showModal = (content: ReactNode) => {
  TOPICS.MODAL_TOPIC.next(content);
};

export const closeModal = () => {
  TOPICS.MODAL_TOPIC_CLOSE.next(false);
};

interface ModalContent {
  level1: ReactElement;
  level2: ReactElement;
  level3: ReactElement;
}

interface ModalState {
  showing: boolean;
  content: ModalContent;
}

const initialState: ModalState = {
  showing: false,
  content: {
    level1: <Fragment />,
    level2: <Fragment />,
    level3: <Fragment />
  }
};

const ModalListener = () => {
  const [modalState, setModalState] = useState(initialState);

  // const showContent = useCallback(
  //   (payload: any) => {
  //     const stateCopy = { ...modalState };
  //     if (stateCopy.content.level1.type !== Fragment) {
  //       if (stateCopy.content.level2.type !== Fragment) {
  //         stateCopy.content.level3 = payload;
  //       } else {
  //         stateCopy.content.level2 = payload;
  //       }
  //     } else {
  //       stateCopy.content.level1 = payload;
  //     }
  //     stateCopy.showing = true;
  //     TOPICS.BACKDROP_TOPIC.next(true);
  //     setModalState(stateCopy);
  //   },
  //   [modalState]
  // );

  // const url = window.location.href;
  // const gpid = url.substring(url.lastIndexOf("/") + 1);
  const closeContent = useCallback(() => {
    const stateCopy = { ...modalState };
    if (stateCopy.content.level3.type === Fragment) {
      if (stateCopy.content.level2.type === Fragment) {
        stateCopy.content.level1 = <Fragment />;
        stateCopy.showing = false;
        TOPICS.BACKDROP_TOPIC.next(false);
      } else {
        // if (constants.TRAINING_GP.includes(gpid)) {
        //   stateCopy.content.level1 = <Fragment />;
        //   stateCopy.showing = false;
        //   TOPICS.BACKDROP_TOPIC.next(false);
        // }
        stateCopy.content.level2 = <Fragment />;
      }
    } else {
      stateCopy.content.level3 = <Fragment />;
    }
    setModalState(stateCopy);
  }, [modalState]);

  // useEffect(() => {
  //   const stateCopy = { ...modalState };
  //   if (constants.TRAINING_GP.includes(gpid)) {
  //     closeContent();
  //     stateCopy.showing = false;
  //     TOPICS.BACKDROP_TOPIC.next(false);
  //   }
  // }, [gpid]);

  // useEffect(() => {
  //   const subscription1 = TOPICS.MODAL_TOPIC.subscribe((payload: any) => {
  //     showContent(payload);
  //   });
  //   const subscription2 = TOPICS.MODAL_TOPIC_CLOSE.subscribe(() => {
  //     closeContent();
  //   });
  //   return () => {
  //     subscription1.unsubscribe();
  //     subscription2.unsubscribe();
  //   };
  // }, [modalState]);

  return modalState.showing ? (
    <Fragment>
      {modalState.content.level3.type !== Fragment && (
        <div className="level3-container">
          {modalState.content.level3}
          <div className="modal-layer modal-level3" onClick={() => closeContent()} />
        </div>
      )}
      {modalState.content.level2.type !== Fragment && (
        <div className="level2-container">
          {modalState.content.level2}
          <div className="modal-layer modal-level2" onClick={() => closeContent()} />
        </div>
      )}
      {modalState.content.level1}
    </Fragment>
  ) : (
    <Fragment />
  );
};

export default ModalListener;
