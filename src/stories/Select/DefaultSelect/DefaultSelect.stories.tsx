import React from 'react';
import constants from '../../../GP4You/constants';
import DefaultSelect from './DefaultSelect.tsx';

export default {
    title: `${constants.menuPath}/Select/DefaultSelect`,
    component: DefaultSelect,
    argTypes : {
        name : {
            table : { disable : true}
        },
        onChange : {
            table : { disable : true}
        },
        value : {
            table : { disable : true}
        },
        backgroundDark : {
            table : { disable : true}
        }
    },
};

export const _DefaultSelect_ = (args) => <DefaultSelect {...args} />;

_DefaultSelect_.bind({});
_DefaultSelect_.args = {}