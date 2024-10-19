import React from 'react';
import constants from '../../GP4You/constants';
import GoogleMap from './GoogleMap.tsx';

export default {
    title: `${constants.menuPath}`,
    component: GoogleMap, 
    parameters : 
        { controls: { disable: true } }
};

export const _GoogleMap_ = (args) => <GoogleMap {...args} />;

_GoogleMap_.bind({});
_GoogleMap_.args = {

}