import React from 'react';
import constants from '../../../GP4You/constants';
import ChartComponent from './ChartComponent.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Charts/ChartComponent`,
    component: ChartComponent,
    argTypes : {
        label : {
            table : { disable : true }
        },
        datasection : {
            table : { disable : true }
        },
        gpid : {
            table : { disable : true }
        },
        colors : {
            table : { disable : true }
        }
    }
};

export const _ChartComponent_ = (args) => <ChartComponent {...args} />;

_ChartComponent_.bind({});
_ChartComponent_.args = {

}