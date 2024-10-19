import React from 'react';
import constants from '../../../GP4You/constants';
import MaterialTimePicker from './MaterialTimePicker.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Time/MaterialTimePicker`,
    component: MaterialTimePicker,
    argTypes : {
        onChange : {
            table : {disable : true}
        },
        required : {
            table : {disable : true}
        },
        yearsUpperMargin : {
            table : {disable : true}
        },
        yearsLowerMargin : {
            table : {disable : true}
        },
        marginLeft : {
            table : {disable : true}
        },
        bigSize : {
            table : {disable : true}
        },
        mediumSize : {
            table : {disable : true}
        },
        aligned : {
            table : {disable : true}
        },
        isModal : {
            table : {disable : true}
        },
        value : {
            table : {disable : true}
        },
        setFocused : {
            table : {disable : true}
        },
        focused : {
            table : {disable : true}
        },
        extraSmallSize : {
            table : {disable : true}
        },
        smallSize : {
            table : {disable : true}
        }
    }
};

export const _MaterialTimePicker_ = (args) => <MaterialTimePicker {...args} />;

_MaterialTimePicker_.bind({});
_MaterialTimePicker_.args = {}