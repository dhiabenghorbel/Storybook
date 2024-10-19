import React from 'react';
import constants from '../../../GP4You/constants';
import Delegation from './Delegation.tsx';

export default {
    title: `${constants.menuPath}/Button/Delegation`,
    component: Delegation,
    argTypes : {
        withText : {
            table : { disable : true }
        },
        light : {
            table : {disable : true}
        }
    }
};

export const _Delegation_ = (args) => <Delegation {...args} />;

_Delegation_.bind({});
_Delegation_.args = {}