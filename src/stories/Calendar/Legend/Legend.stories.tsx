import React from 'react';
import constants from '../../../GP4You/constants';
import Legend from './Legend.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Legend/Legend`,
    component: Legend,
    argTypes : {
      items : {
        type : 'object',
        defaultValue : [{bgColor : "#677FE7" , reason :"Holiday absence"} , {bgColor : "#00FFFF" , reason :"Sickness"}]
      },
      visible : {
        table : {disable : true}
      }
    }
};

export const _Legend_ = (args) => <Legend {...args} />;

_Legend_.bind({});
_Legend_.args = {

}