import React from 'react';
import constants from '../../../GP4You/constants';
import CheckboxRadioInput from './CheckboxRadioInput.tsx';

export default {
    title: `${constants.menuPath}/Input/CheckboxRadioInput`,
    component: CheckboxRadioInput,
    argTypes : {
        id : {
            table : { disable : true}
        },
        onChange : {
            table : { disable : true}
        },
        value : {
            table : { disable : true}
        },
        regExp : {
            table : { disable : true}
        },
        errorMessage : {
            table : { disable : true}
        },
        or : {
            table : { disable : true}
        },
        validation : {
            table : { disable : true}
        },
    }
};

export const _CheckboxRadioInput_ = (args) => <CheckboxRadioInput {...args} />;

_CheckboxRadioInput_.bind({});
_CheckboxRadioInput_.args = {

}