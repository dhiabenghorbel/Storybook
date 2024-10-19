import React from 'react';
import constants from '../../../GP4You/constants';
import Accordion from './Accordion.tsx';

export default {
    title: `${constants.menuPath}/Text/Accordion`,
    component: Accordion,
    argTypes : {
        children : {
            control : 'text'
        }
    }
};

export const _Accordion_ = (args) => <Accordion {...args} />;

_Accordion_.bind({});
_Accordion_.args = {

}