import React from 'react';
import constants from '../../../GP4You/constants';
import TextDataItem from './TextDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Text/TextDataItem`,
    component: TextDataItem,
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
        color : {
            control : {type : "color"}
        },
        extraSmallSize : {
            control : {type : "boolean"}
        },
        smallSize : {
            control : {type : "boolean"}
        },
        mediumSize : {
            control : {type : "boolean"}
        },
        bigSize : {
            control : {type : "boolean"}
        },
        marginLeft : {
            control : {type : "boolean"}
        },
        hidden : {
            control : {type : "boolean"}
        },
        hideIfNoValue : {
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

export const _TextDataItem_ = (args) => <TextDataItem {...args} />;

_TextDataItem_.bind({});
_TextDataItem_.args = {

}