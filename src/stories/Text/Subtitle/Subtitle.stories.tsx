import React from 'react';
import constants from '../../../GP4You/constants';
import Subtitle from './Subtitle.tsx';

export default {
    title: `${constants.menuPath}/Text/Subtitle`,
    component: Subtitle,
    argTypes : {
        notTranslated : {
            table : { disable : true}
        },
        onClick : {
            table : { disable : true}
        }
    }
};

export const _Subtitle_ = (args) => <Subtitle {...args} />;

_Subtitle_.bind({});
_Subtitle_.args = {

}