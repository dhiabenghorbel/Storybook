import React from 'react';
import constants from '../../GP4You/constants';
import MaterialSwitch from './MaterialSwitch.tsx';

export default {
    title: `${constants.menuPath}/MaterialSwitch`,
    component: MaterialSwitch,
    argTypes: {
        value : {
            table: { disable : true }
        },
        aligned : {
            table: { disable : true }
        },
        smallSize : {
            table: { disable : true }
        },
        mediumSize : {
            table: { disable : true }
        },
        extraSmallSize : {
            table: { disable : true }
        },
        onChange : {
            table: { disable : true }
        }
    }
};

export const _MaterialSwitch_ = (args) => <MaterialSwitch {...args} />;

_MaterialSwitch_.bind({});
_MaterialSwitch_.args = {}