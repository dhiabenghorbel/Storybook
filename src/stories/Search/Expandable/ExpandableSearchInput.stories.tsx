import React from 'react';
import constants from '../../../GP4You/constants';
import ExpandableSearchInput from './ExpandableSearchInput.tsx';

export default {
    title: `${constants.menuPath}/Search/ExpandableSearchInput`,
    component: ExpandableSearchInput,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        onChange : {
            table : {disable : true}
        },
        value : {
            table : {disable : true}
        },
        withBubbles : {
            table : {disable : true}
        },
        tableFields : {
            table : {disable : true}
        },
    }
    
};

export const _ExpandableSearchInput_ = (args) => <ExpandableSearchInput {...args} />;

_ExpandableSearchInput_.bind({});
_ExpandableSearchInput_.args = {
}