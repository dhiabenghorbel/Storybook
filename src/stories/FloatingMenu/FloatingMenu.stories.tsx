import React from 'react';
import constants from '../../GP4You/constants';
import FloatingMenu from './FloatingMenu.tsx';

export default {
    title: `${constants.menuPath}/FloatingMenu/FloatingMenu`,
    component: FloatingMenu,
    argTypes : {
        onClose : {
            table : {disable : true}
        }
    }
};

export const _FloatingMenu_ = (args) => <FloatingMenu {...args} />;

_FloatingMenu_.bind({});
_FloatingMenu_.args = {

}