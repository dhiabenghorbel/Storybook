import React from 'react';
import constants from '../../../GP4You/constants';
import Textarea from './Textarea.tsx';

export default {
    title: `${constants.menuPath}/Input/Textarea`,
    component: Textarea,
    argTypes : {
        value : {
            control : 'text'
        },
        label : {
            control : 'text'
        },
        readOnly : {
            control : 'boolean'
        },
        smallSize : {
            control : 'boolean'
        },
        bold : {
            control : 'boolean'
        },
        textAreaHeight : {
            control : 'number'
        },
        validationType : {
            options : ['dni','nifnie','nie','iban','ssnumber','ccpt','sspt','ESPAFI'],
            control : 'select'
        },
        required : {
            control : {type : 'boolean'}
        }
    }
};

export const _Textarea_ = (args) => <Textarea {...args} />;

_Textarea_.bind({});
_Textarea_.args = {}