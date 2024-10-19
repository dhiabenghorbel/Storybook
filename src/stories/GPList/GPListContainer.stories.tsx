import React from 'react';
import constants from '../../GP4You/constants';
import GPListContainer from './GPListContainer.tsx';

export default {
    title: `${constants.menuPath}/GPList/GPListContainer`,
    component: GPListContainer,
    argTypes : {
        setCollapseBar : {
            table : {disable : true}
        }
    }

};

export const _GPListContainer_ = (args) => <GPListContainer  {...args} />;

_GPListContainer_.bind({}); 
_GPListContainer_.args = {
}