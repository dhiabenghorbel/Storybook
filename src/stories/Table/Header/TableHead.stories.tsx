import React from 'react';
import constants from '../../../GP4You/constants';
import TableHead from './TableHead.tsx';

export default {
    title: `${constants.menuPath}/Table/Header/TableHead`,
    component: TableHead,
    argTypes : {
        children : { control : "text"},
        calendar : { control : 'boolean' },
        spaced : {
            table : { disable : true}
        }
    }
};

export const _TableHead_ = (args) => <TableHead {...args} />;

_TableHead_.bind({});
_TableHead_.args = {
}