import React from 'react';
import constants from '../../../GP4You/constants';
import GPListItem from './GPListItem.tsx';

export default {
    title: `${constants.menuPath}/GPList/List/GPListItem`,
    component: GPListItem,
    argTypes : {
        name : {
            control : { type : 'radio'},
            options : ["AGD05LM0","AGC05E00","AGC05CE0"]
        },
        key : {
            table : {disable : true}
        },
        portalAccessUrl : {
            table : {disable : true}
        },
        technologieName : {
            table : {disable : true}
        }
    }

};

export const _GPListItem_ = (args) => <GPListItem  {...args} />;

_GPListItem_.bind({}); 

_GPListItem_.args = {
}