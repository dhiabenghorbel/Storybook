import React from 'react';
import constants from '../../GP4You/constants';
import Toasts from './Toasts.tsx';

export default {
    title: `${constants.menuPath}`,
    component: Toasts,
    argTypes : {
        onClose : {
            table : { disable:true }
        },
        open : {
            table : { disable:true }
        }
    }
};

export const _Toast_ = (args) => <Toasts {...args} />;

_Toast_.bind({});
_Toast_.args = {}