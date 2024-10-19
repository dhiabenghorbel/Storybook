import React from 'react';
import constants from '../../../GP4You/constants';
import BlobDataItem from './BlobDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Blobs/BlobDataItem`,
    component: BlobDataItem,
      argTypes : {
        notUploadable : { 
          control : {type : 'boolean'},
        },
        downloadable : { 
          control : {type : 'boolean'},
        },
        isArchive : { 
          control : {type : 'boolean'},
        },
        value : { 
          control : {type : 'text'},
        },
        name : {
          table : {disable : true}
        },
        withoutLabel : {
          control : {type : 'boolean'},
        },
        readOnly : {
          control : {type : "boolean"}
        },
        required : {
          control : {type : "boolean"}
        },
        type : {
          control : {type : 'select'},
          options : ["text", "number", "boolean", "float", "customFloat", "integer", "email", "textarea", "password", "percent", "rangeDate", "time", "timePicker", "date" , "month", "year", "select", "photo", "codes", "file", "radio", "register", "currency", "report", "yearMonth"]
        },
        hidden : {
          control : {type : "boolean"}
        },
    }
    
};

export const _BlobDataItem_ = (args) => <BlobDataItem {...args} />;

_BlobDataItem_.bind({});
_BlobDataItem_.args = {}