import React from 'react';
import constants from '../../../GP4You/constants';
import MaterialDatePicker from './MaterialDatePicker.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Time/MaterialDatePicker`,
    component: MaterialDatePicker,
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
        extraSmallSize : {
            table : {disable : true}
        },
        smallSize : {
            table : {disable : true}
        }
    }
    
};

export const _MaterialDatePicker_ = (args) => <MaterialDatePicker {...args} />;

_MaterialDatePicker_.bind({});
_MaterialDatePicker_.args = {}