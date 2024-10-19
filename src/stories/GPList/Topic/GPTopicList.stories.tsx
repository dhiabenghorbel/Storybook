import React from 'react';
import constants from '../../../GP4You/constants';
import GPTopicList from './GPTopicList.tsx';

export default {
    title: `${constants.menuPath}/GPList/Topic/GPTopicList`,
    component: GPTopicList,
    argTypes : {
       collapseBar : {
        table : {disable : true}
       }
    }

};

export const _GPTopicList_ = (args) => <GPTopicList  {...args} />;

_GPTopicList_.bind({}); 
_GPTopicList_.args = {
}