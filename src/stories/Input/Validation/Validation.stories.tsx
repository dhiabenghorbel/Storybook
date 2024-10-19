import React from 'react';
import constants from '../../../GP4You/constants';
import Validation from './Validation.tsx';

export default {
    title: `${constants.menuPath}/Input/Validation`,
    component: Validation,
    argTypes : {
        max : {
            table : { disable : true}
        },
        min : {
            table : { disable : true}
        },
        regExp : {
            table : { disable : true}
        },
        required : {
            table : { disable : true}
        },
        errorCallBack : {
            table : { disable : true}
        },
        value : {
            control : 'text'
        },
        type : {
            options : ['dni','nifnie','nie','iban','ssnumber','ccpt','sspt','textarea-','telephone-','ESPAFI'],
            control : 'select'
        }
    }
};

export const _Validation_ = (args) => <Validation {...args} />;

_Validation_.bind({});
_Validation_.args = {

}