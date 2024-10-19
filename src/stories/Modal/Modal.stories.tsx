import React from 'react';
import constants from '../../GP4You/constants';
import Modal from './Modal.tsx';

export default {
    title: `${constants.menuPath}/Modal`,
    component: Modal,
    parameters: {
        backgrounds: {
          default: "gray",
          values: [
            {
              name: "gray",
              value: "#f2f2f2",
            }
          ],
        },
    },
    argTypes : {
        children : {
            control : 'text'
        }
    }
};

export const _Modal_ = (args) => <Modal {...args} />;

_Modal_.bind({});
_Modal_.args = {
}