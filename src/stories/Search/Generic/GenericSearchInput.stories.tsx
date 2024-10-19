import React from 'react';
import constants from '../../../GP4You/constants';
import GenericSearchInput from './GenericSearchInput.tsx';

export default {
    title: `${constants.menuPath}/Search/GenericSearchInput`,
    component: GenericSearchInput,
    argTypes : {
        onClick : {
            table : {disable : true}
        },
        onChange : {
            table : {disable : true}
        },
        regExp : {
            table : {disable : true}
        },
        value : {
            table : {disable : true}
        },
        black : {
            table : {disable : true}
        }
    },

    
};

export const _GenericSearchInput_ = (args) => <GenericSearchInput {...args} />;

_GenericSearchInput_.bind({});
_GenericSearchInput_.args = {
}