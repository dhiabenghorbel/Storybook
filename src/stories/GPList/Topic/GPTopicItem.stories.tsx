import React from 'react';
import constants from '../../../GP4You/constants';
import GPTopicItem from './GPTopicItem.tsx';

export default {
    title: `${constants.menuPath}/GPList/Topic/GPTopicItem`,
    component: GPTopicItem,
    argTypes : {
        name :{
            table : {disable : true}
        },
        gps :{
            table : {disable : true}
        },
        toggleShow :{
            table : {disable : true}
        },
    }

};

export const _GPTopicItem_ = (args) => <GPTopicItem  {...args} />;

_GPTopicItem_.bind({}); 
_GPTopicItem_.args = {
}