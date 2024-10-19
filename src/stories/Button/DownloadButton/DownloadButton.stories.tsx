import React from 'react';
import constants from '../../../GP4You/constants';
import DownloadButton from './DownloadButton.tsx';

export default {
    title: `${constants.menuPath}/Button/DownloadButton`,
    component: DownloadButton,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        light : {
            table : {disable : true}
        }
    }
};

export const _DownloadButton_ = (args) => <DownloadButton {...args} />;

_DownloadButton_.bind({});
_DownloadButton_.args = {}