import React from 'react';
import constants from '../../../GP4You/constants';
import CircularButton from './CircularButton.tsx';

export default {
    title: `${constants.menuPath}/Badges/CircularButton`,
    component: CircularButton,
    argTypes : {
        content : {
            control : 'number'
        },
        icon : {
            control : 'text'
        }
    }
};

export const _CircularButton_ = (args) => <CircularButton {...args} />;

_CircularButton_.bind({});