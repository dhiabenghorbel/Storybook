import React from 'react';
import constants from '../../GP4You/constants';
import Select from './Select.tsx';

export default {
    title: `${constants.menuPath}/Select/Select`,
    component: Select,
    argTypes : {
        name : {
            table : { disable : true}
        },
        nulign : {
            table : { disable : true}
        },
        datasection : {
            table : { disable : true}
        },
        population : {
            table : { disable : true}
        },
        domain : {
            table : { disable : true}
        },
        first : {
            table : { disable : true}
        },
        value : {
            table : { disable : true}
        },
        onChange : {
            table : { disable : true}
        },
        aligned : {
            table : { disable : true}
        },
        halfwidth : {
            table : { disable : true}
        },
        extraSmallSize : {
            table : { disable : true}
        },
        smallSize : {
            table : { disable : true}
        },
        iconName : {
            table : { disable : true}
        },
        backgroundDark : {
            table : { disable : true}
        }, 
        withoutLabel : {
            table : { disable : true}
        }
    }
};

export const _Select_ = (args) => <Select {...args} />;

_Select_.bind({});
_Select_.args = {}