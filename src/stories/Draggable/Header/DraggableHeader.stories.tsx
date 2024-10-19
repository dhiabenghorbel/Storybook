import React from 'react';
import constants from '../../../GP4You/constants';
import DraggableHeader from './DraggableHeader.tsx';

export default {
    title: `${constants.menuPath}/Draggable/DraggableHeader`,
    component: DraggableHeader,
    argTypes : {
        handleClose : { 
             control : "boolean" 
    },
        handleMinimize : {
            table : { disable : true }
    },
        extraButtons : {
            table : { disable : true }
}
    }
};

export const _DraggableHeader_ = (args) => <DraggableHeader {...args} />;

_DraggableHeader_.bind({});
_DraggableHeader_.args = {

}