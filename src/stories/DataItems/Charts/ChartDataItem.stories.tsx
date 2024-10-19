import React from 'react';
import constants from '../../../GP4You/constants';
import ChartDataItem from './ChartDataItem.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Charts/ChartDataItem`,
    component: ChartDataItem,
    argTypes : {
        type : {
            control : { 
                type : "text"
            },
            defaultValue : "pieChart"
        },
        loading : {
            control : {
                type : "boolean"
            }
        },
        data : {
            control : {
                type : 'object'
            },
            defaultValue :  [{ title: "Proteins", data: [{ value: "33,3%", amount: 5, color: "#30A3D5" }] },
            { title: "Fats", data: [{ value: "33,3%", amount: 5, color: "#3044D5" }] },
            { title: "Carbohydrates", data: [{ value: "33,3%", amount: 5, color: "#9FA8ED" }] }]
        }
    }
};

export const _ChartDataItem_ = (args) => <ChartDataItem {...args} />;

_ChartDataItem_.bind({});
_ChartDataItem_.args = {

}