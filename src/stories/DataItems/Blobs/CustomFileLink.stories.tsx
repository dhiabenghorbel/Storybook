import React from 'react';
import constants from '../../../GP4You/constants';
import CustomFileLink from './CustomFileLink.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Blobs/CustomFileLink`,
    component: CustomFileLink,
      argTypes : {
        path : {
            table : {disable : true}
        },
        text : {
          control : {type : "boolean"}
        },
        url : {
            control : {type : "text"}
        },
        isArchive : {
            control : {type : "boolean"}
        },
    }
    
};

export const _CustomFileLink_ = (args) => <CustomFileLink {...args} />;

_CustomFileLink_.bind({});
_CustomFileLink_.args = {}