import React from 'react';
import constants from '../../GP4You/constants';
import Pagination from './Pagination.tsx';

export default {
    title: `${constants.menuPath}`,
    component: Pagination,
    argTypes : {
        range : {
            table: { disable : true }
        },
        handleClick : {
            table: { disable : true }
        },
        fromGpData : {
            table: { disable : true }
        },
    }
};

export const _Pagination_ = (args) => <Pagination {...args} />;

_Pagination_.bind({});
_Pagination_.args = {

}