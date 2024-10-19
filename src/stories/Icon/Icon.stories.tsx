import React from 'react';
import constants from '../../GP4You/constants';
import Icon from './Icon.tsx';

export default {
    title: `${constants.menuPath}/Icon`,
    component: Icon,
    argTypes : {
        id: { 
            table : {disable: true }
        },
        link: { 
            table : {disable: true }
        },
        onClick: { 
            table : {disable: true }
        },
        style : {
            type : 'object',
            defaultValue : {
                color : "#2A397C"
            }
        }
    }
};

export const _Icon_ = (args) => <Icon  {...args} />;

_Icon_.bind({}); 
_Icon_.args = {}