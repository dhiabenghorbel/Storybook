import React from 'react';
import constants from '../../GP4You/constants';
import DraggableComponent from './DraggableComponent.tsx';

export default {
    title: `${constants.menuPath}/Draggable/DraggableComponent`,
    component: DraggableComponent,
    argTypes : {
        onStop : {
            table : { disable : true }
        },
        onStart : {
            table : { disable : true }
        },
        handleClose : {
            table : { disable : true }
        },
        headerButtons : {
            table : { disable : true }
        },
        children : {
            control : "text"
        }
        }
};

export const _DraggableComponent_ = (args) => <DraggableComponent {...args} />;

_DraggableComponent_.bind({});
_DraggableComponent_.args = {

}