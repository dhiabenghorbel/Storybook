import React from 'react';
import constants from '../../GP4You/constants';
import Backdrop from './Backdrop.tsx';

export default {
    title: `${constants.menuPath}`,
    component: Backdrop,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        children : {
            table : {disable : true}
        }
    }
};

export const _Backdrop_ = (args) => <Backdrop {...args} />;

_Backdrop_.bind({});
_Backdrop_.args = {
    onClick: (e) => { console.log(e) }
}