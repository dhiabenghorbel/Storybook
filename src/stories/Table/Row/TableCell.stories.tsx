import React from 'react';
import constants from '../../../GP4You/constants';
import TableCell from './TableCell.tsx';

export default {
    title: `${constants.menuPath}/Table/Row/TableCell`,
    component: TableCell,
    argTypes : {
        children : {
            control : 'text',
        },
        onClick : {
            table : {disable : true}
        },
        id : {
            table : {disable : true}
        },
        
        
        cursorPointer : {
            table : {disable : true}
        },
       
        fullWidth : {
            table : {disable : true}
        },
        halfWidth : {
            table : {disable : true}
        },
    }
    
};

export const _TableCell_ = (args) => <TableCell {...args} />;

_TableCell_.bind({});
_TableCell_.args = {

}