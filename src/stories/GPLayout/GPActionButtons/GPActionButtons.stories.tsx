import React from 'react';
import constants from '../../../GP4You/constants';
import GPActionButtons from './GPActionButtons.tsx';

export default {
    title: `${constants.menuPath}/GPLayout/GPActionButtons`,
    component: GPActionButtons,
    argTypes : {
        onBack : {
            table : {disable : true}
        },
        onDraft : {
            table : {disable : true}
        },
        onDelete : {
            table : {disable : true}
        },
        onDelegate : {
            table : {disable : true}
        },
        onCancel : {
            table : {disable : true}
        },
        onNext : {
            table : {disable : true}
        },
        onSearch : {
            table : {disable : true}
        },
        onPrevious : {
            table : {disable : true}
        },
        onSubmit : {
            table : {disable : true}
        },
    }    
};

export const _GPActionButtons_ = (args) => <GPActionButtons {...args} />;

_GPActionButtons_.bind({});
_GPActionButtons_.args = {
}