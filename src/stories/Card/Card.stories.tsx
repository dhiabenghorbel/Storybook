import React from 'react';
import constants from '../../GP4You/constants';
import Card from './Card.tsx';

export default {
    title: `${constants.menuPath}/Card`,
    component: Card,
    argTypes : {
        children : { 
            control : {type : 'text'}
        },
        fullHeight : {
            table : { disable : true }
        },
        fullWidth : {
            table : { disable : true }
        },
        fitContent : {
            table : { disable : true }
        },
        dmsCard : {
            table : { disable : true }
        },
        contentCard : {
            table : { disable : true }
        },
        isSmallCard : {
            table : { disable : true }
        }
    }
};

export const _Card_ = (args) => <Card {...args} />;

_Card_.bind({});
_Card_.args = {}