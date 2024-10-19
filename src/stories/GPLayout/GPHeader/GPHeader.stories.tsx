import React from 'react';
import constants from '../../../GP4You/constants';
import GPHeader from './GPHeader.tsx';

export default {
    title: `${constants.menuPath}/GPLayout/GPHeader`,
    component: GPHeader,
    argTypes : {
        documents : {
            table : {disable : true}
        }
    }
};

export const _GPHeader_ = (args) => <GPHeader {...args} />;

_GPHeader_.bind({});
_GPHeader_.args = {
}