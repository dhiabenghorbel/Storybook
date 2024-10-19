import React from 'react';
import constants from '../../../GP4You/constants';
import GPCard from './GPCard.tsx';

export default {
    title: `${constants.menuPath}/GPLayout/GPCard`,
    component: GPCard,
    argTypes : {
        overflowCard : {
            table : {disable : true}
        },
        alignHeader : {
            table : {disable : true}
        },
        fillWidth : {
            table : {disable : true}
        },
        fitContent : {
            table : {disable : true}
        },
        documents : {
            table : {disable : true}
        },
        noPadding : {
            table : {disable : true}
        },
    }
};

export const _GPCard_ = (args) => <GPCard {...args} />;

_GPCard_.bind({});
_GPCard_.args = {
}