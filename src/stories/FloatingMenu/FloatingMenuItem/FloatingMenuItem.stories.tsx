import React from 'react';
import constants from '../../../GP4You/constants';
import FloatingMenuItem from './FloatingMenuItem.tsx';

export default {
    title: `${constants.menuPath}/FloatingMenu/FloatingMenuItem`,
    component: FloatingMenuItem,
    argTypes : {
        onClose : {
            table : {disable : true}
        },
        onClick : {
            table : {disable : true}
        },
        preventClose : {
            table : {disable : true}
        }
    }
};

export const _FloatingMenuItem_ = (args) => <FloatingMenuItem {...args} />;

_FloatingMenuItem_.bind({});
_FloatingMenuItem_.args = {

}