import React from 'react';
import constants from '../../../GP4You/constants';
import TextField from './TextField.tsx';

export default {
    title: `${constants.menuPath}/Input/TextField`,
    component: TextField,
    argTypes : {
        id : {
            table : { disable : true}
        },
        required : {
            table : { disable : true}
        },
        onChange : {
            table : { disable : true}
        },
        onClick : {
            table : { disable : true}
        },
        onBlur : {
            table : { disable : true}
        },
        regExp : {
            table : { disable : true}
        },
        first : {
            table : { disable : true}
        },
        errorCallBack : {
            table : { disable : true}
        },
        bigMarginRight : {
            table : { disable : true}
        },
        aligned : {
            table : { disable : true}
        },
        spaced : {
            table : { disable : true}
        },
        MaxContent : {
            table : { disable : true}
        },
        step : {
            table : { disable : true}
        },
        max : {
            table : { disable : true}
        },
        min : {
            table : { disable : true}
        },
        type : {
            table : { disable : true}
        },
        marginLeft : {
            table : { disable : true}
        },
        backgroundDark : {
            table : { disable : true}
        },
        toolbar : {
            table : { disable : true}
        },
        value : {
            table : { disable : true}
        },
        validationType : {
            options : ['dni','nifnie','nie','iban','ssnumber','ccpt','sspt','ESPAFI'],
            control : 'select'
        }
    }
};

export const _TextField_ = (args) => <TextField {...args} />;

_TextField_.bind({});
_TextField_.args = {

}