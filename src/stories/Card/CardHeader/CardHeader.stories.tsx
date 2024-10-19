import React from 'react';
import constants from '../../../GP4You/constants';
import CardHeader from './CardHeader.tsx';

export default {
    title: `${constants.menuPath}/Card/CardHeader`,
    component: CardHeader,
    argTypes : {
        children : { 
            control : {type : 'text'}
    }
}
};

export const _CardHeader_ = (args) => <CardHeader {...args} />;

_CardHeader_.bind({});
_CardHeader_.args = {

}