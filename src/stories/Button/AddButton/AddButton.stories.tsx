import React from 'react';
import constants from '../../../GP4You/constants';
import AddButton from './AddButton.tsx';

export default {
    title: `${constants.menuPath}/Button/AddButton`,
    component: AddButton ,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        light : {
            table : {disable : true}
        }
    }
};

export const _AddButton_ = (args) => <AddButton {...args} />;

_AddButton_.bind({});
_AddButton_.args = {}