import React from 'react';
import constants from '../../../GP4You/constants';
import TextAreaDataItem from './TextAreaDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Text/TextAreaDataItem`,
    component: TextAreaDataItem,
    argTypes : {
        label : {
            control : {type : "text"}
        },
        value : {
            control : {type : "text"}
        },
        readOnly : {
            control : {type : "boolean"}
        },
        bold : {
            control : {type : "boolean"}
        },
        textAreaHeight : {
            control : {type : "number"}
        },
        smallSize : {
            control : {type : "boolean"}
        },
        hidden : {
            control : {type : "boolean"}
        },
        required : {
            control : {type : "boolean"}
        },
        validationType : {
            control : {
                type : "select",
                options : ["text", "number", "boolean", "float", "customFloat", "integer", "email", "textarea", "password", "percent", "rangeDate", "time", "timePicker", "date" , "month", "year", "select", "photo", "codes", "file", "radio", "register", "currency", "report", "yearMonth"]

            }
        },
    }
};

export const _TextAreaDataItem_ = (args) => <TextAreaDataItem {...args} />;

_TextAreaDataItem_.bind({});
_TextAreaDataItem_.args = {}