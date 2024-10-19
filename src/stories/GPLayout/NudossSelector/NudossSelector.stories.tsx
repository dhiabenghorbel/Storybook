import React from 'react';
import constants from '../../../GP4You/constants';
import NudossSelector from './NudossSelector.tsx';

export default {
    title: `${constants.menuPath}/GPLayout/NudossSelector`,
    component: NudossSelector,
    argTypes : {
        gpid : {
            table : { disable : true }
        },
        loaded : {
            table : { disable : true } 
        },
        multipleSelector : {
            table : { disable : true } 
        },
        SubordinatesValues : {
            type : 'object',
            defaultValue : 
            [
                {data : {label : "record number 1", value : 1}},
                {data : {label : "record number 2", value : 2}},
                {data : {label : "record number 3", value : 3}}
            ]
        }
    }
};

export const _NudossSelector_ = (args) => <NudossSelector {...args} />;

_NudossSelector_.bind({});
_NudossSelector_.args = {}