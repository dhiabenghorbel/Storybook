import React from 'react';
import constants from '../../../GP4You/constants';
import TablePagination from './TablePagination.tsx';

export default {
    title: `${constants.menuPath}/Table/Pagination/TablePagination`,
    component: TablePagination,
    argTypes : {
        handleChangePage : {
            table : { disable : true}
        },
        handleChangeRowsPerPage : {
            table : { disable : true}
        },
        paginationAmounts: {
            control: {
              type: 'array',
            },
            defaultValue: [5, 10, 15]
        },
        
             
        
    }
    
};

export const _TablePagination_ = (args) => <TablePagination {...args} />;

_TablePagination_.bind({});
_TablePagination_.args = {
}