import React from 'react';
import constants from '../../../GP4You/constants';
import MinimizeButton from './MinimizeButton.tsx';

export default {
    title: `${constants.menuPath}/Button/MinimizeButton`,
    component: MinimizeButton,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        light : {
            table : {disable : true}
        }
    }
};

export const _MinimizeButton_ = (args) => <MinimizeButton {...args} />;

_MinimizeButton_.bind({});
_MinimizeButton_.args = {}