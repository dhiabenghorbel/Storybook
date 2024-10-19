import React from 'react';
import constants from '../../GP4You/constants';
import Tabs from './TabSelector.tsx';

export default {
    title: `${constants.menuPath}/Tabs`,
    component: Tabs,
    argTypes : {
        options : {
            control: {
                type: 'array',
              },
            defaultValue : [ "Tab 1" ,"Tab 2"]
        },
        children : {
            control: {
                type: 'array',
              },
            defaultValue : ["Welcome, you have selected Tab 1." , "Welcome, you moved to Tab 2."]
        },
        noMargin : {
            table : {disable : true}
        } 
    }
};

export const _Tabs_ = (args) => <Tabs {...args} />;

_Tabs_.bind({});
_Tabs_.args = {}