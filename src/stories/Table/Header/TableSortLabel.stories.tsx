import React from 'react';
import constants from '../../../GP4You/constants';
import TableSortLabel from './TableSortLabel.tsx';

export default {
    title: `${constants.menuPath}/Table/Header/TableSortLabel`,
    component: TableSortLabel,
    argTypes : {
        children : { control : "text"},
        onClick : {
            table : { disable : true}
        },
        direction : {
            control : 'radio',
            options : ["asc","desc"]
        },
        active : {
            defaultValue : true
        }
    }
};

export const _TableSortLabel_ = (args) => <TableSortLabel {...args} />;

_TableSortLabel_.bind({});
_TableSortLabel_.args = {}