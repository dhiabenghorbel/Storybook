import React from 'react';
import constants from '../../GP4You/constants';
import Loading from './LoadingSpinner.tsx';

export default {
    title: `${constants.menuPath}/Loading`,
    component: Loading,
};

export const _Loading_ = (args) => <Loading {...args} />;

_Loading_.bind({});
_Loading_.args = {

}