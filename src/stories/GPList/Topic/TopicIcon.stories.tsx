import React from 'react';
import constants from '../../../GP4You/constants';
import TopicIcon from './TopicIcon.tsx';

export default {
    title: `${constants.menuPath}/GPList/Topic/TopicIcon`,
    component: TopicIcon,
    argTypes : {
        name : {
            type : 'select',
            options : ["PAD","ABS","GTA","GAF","RSK","SKL","TRA","SRQ","ASS"]
        }
    }

};

export const _TopicIcon_ = (args) => <TopicIcon  {...args} />;

_TopicIcon_.bind({}); 
_TopicIcon_.args = {
}