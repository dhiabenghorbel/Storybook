import React from 'react';
import constants from '../../../GP4You/constants';
import MaterialAutocomplete from './MaterialAutocomplete.tsx';

export default {
    title: `${constants.menuPath}/Select/MaterialAutocomplete`,
    component: MaterialAutocomplete,
    argTypes : {
        aligned : {
            table : { disable : true}
        },
        value : {
            table : { disable : true}
        },
        name : {
            table : { disable : true}
        },
        onChange : {
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
        nulign : {
            table : { disable : true}
        },
        iconName : {
            table : { disable : true}
        },
        backgroundDark : {
            table : { disable : true}
        },
        SelectOptions : {
            type : 'object',
            defaultValue : [{value :"1" , children : "option 1"},{value :"2" , children : "option 2"},{value :"3" , children : "option 3"}]
        },
        marginLeft  : {
            table : { disable : true}
        },
    }
};

export const _MaterialAutocomplete_ = (args) => <MaterialAutocomplete {...args} />;

_MaterialAutocomplete_.bind({});
_MaterialAutocomplete_.args = {}