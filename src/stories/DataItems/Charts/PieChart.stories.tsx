import React from 'react';
import constants from '../../../GP4You/constants';
import PieChart from './PieChart.tsx';

export default {
    title: `${constants.menuPath}/DataItems/Charts/PieChart`,
    component: PieChart,
    argTypes : {
        data : {
            control : {
                type : 'object'
            },
            defaultValue : [{ title: "Skill", data: [{ value: "50%", amount: 1, color: "#BC1111" }] },
        { title: "Knowledge", data: [{ value: "50%", amount: 1, color: "#ED9F9F" }] }]
        }
    }
};

export const _PieChart_ = (args) => <PieChart {...args} />;

_PieChart_.bind({});
_PieChart_.args = {

}