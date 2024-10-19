import React from 'react';
import constants from '../../../GP4You/constants';
import DeleteButton from './DeleteButton.tsx';

export default {
    title: `${constants.menuPath}/Button/DeleteButton`,
    component: DeleteButton,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        light : {
            table : {disable : true}
        }
    }
};

export const _DeleteButton_ = (args) => <DeleteButton {...args} />;

_DeleteButton_.bind({});
_DeleteButton_.args = {}