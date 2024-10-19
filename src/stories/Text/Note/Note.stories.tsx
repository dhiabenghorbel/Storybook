import React from 'react';
import constants from '../../../GP4You/constants';
import Note from './Note.tsx';

export default {
    title: `${constants.menuPath}/Text/Note`,
    component: Note,
    argTypes : {
        alignCenter : {
            table : { disable : true}
        },
        smallNote : {
            table : { disable : true}
        },
        halfWith : {
            table : { disable : true}
        }
    }
};

export const _Note_ = (args) => <Note {...args} />;

_Note_.bind({});
_Note_.args = {

}