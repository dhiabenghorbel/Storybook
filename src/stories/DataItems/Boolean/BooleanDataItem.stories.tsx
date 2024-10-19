import React from 'react';
import constants from '../../../GP4You/constants';
import BooleanDataItem from './BooleanDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Boolean/BooleanDataItem`,
    component: BooleanDataItem,
      argTypes : {
        value : { 
            control : {
            type : 'text'
        },
        },
        label : { 
            control : {
            type : 'text'
        },
        },
        or : { 
            control : {
            type : 'radio'
        },
        
        options : ["","X"]
        },
        readOnly : {
            control : {
                type : "boolean"
            }
        },
        required : {
            control : {
                type : "boolean"
            }
        },
        type : {
            control : {
                type : 'select'
            },
            options : ["text", "number", "boolean", "float", "customFloat", "integer", "email", "textarea", "password", "percent", "rangeDate", "time", "timePicker", "date" , "month", "year", "select", "photo", "codes", "file", "radio", "register", "currency", "report", "yearMonth"]
        },
        hidden : {
            control : {
                type : "boolean"
            }
        },
        hideIfNoValue : {
            control : {
                type : "boolean"
            }
        },

        
    }
      
    
};

export const _BooleanDataItem_ = (args) => <BooleanDataItem {...args} />;

_BooleanDataItem_.bind({});
_BooleanDataItem_.args = {}