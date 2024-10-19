import React from 'react';
import constants from '../../../GP4You/constants';
import FileInput from './FileInput.tsx';

export default {
    title: `${constants.menuPath}/Input/FileInput`,
    component: FileInput,
    argTypes : {
        onChange : {
            table : { disable : true}
        },
        name : {
            table : { disable : true}
        },
        value : {
            table : { disable : true}
        },
        allowedTypes : {
            table : { disable : true}
        },
    }
};

export const _FileInput_ = (args) => <FileInput {...args} />;

_FileInput_.bind({});
_FileInput_.args = {

}