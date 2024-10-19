import React from 'react';
import constants from '../../../GP4You/constants';
import DmsButton from './DmsButton.tsx';

export default {
    title: `${constants.menuPath}/Button/DmsButton`,
    component: DmsButton,
    argTypes : {
        documents : {
            type : 'object',
            defaultValue : ["item 1" , "item 2"]
        },
        left : {
            table : {disable : true}
        },
        right : {
            table : {disable : true}
        },
        light : {
            table : {disable : true}
        }
    }
};

export const _DmsButton_ = (args) => <DmsButton {...args} />;

_DmsButton_.bind({});
_DmsButton_.args = {}