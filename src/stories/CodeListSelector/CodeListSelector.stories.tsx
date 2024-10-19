import React from 'react';
import constants from '../../GP4You/constants';
import CodeListSelector from './CodeListSelector.tsx';

export default {
    title: `${constants.menuPath}/CodeListSelector`,
    component: CodeListSelector,
    argTypes : {
        index :{
            table : {disable : true}
        },
        onClick :{
            table : {disable : true}
        },
        directory :{
            table : {disable : true}
        },
        nudoss :{
            table : {disable : true}
        },
        elements : {
            type : 'object',
            defaultValue : [{code: "HA" , label: "Holiday absence"},{code: "SA" , label: "Sickness"},{code: "ACC" , label: "Accident"}]
        }
    }
};

export const _CodeListSelector_ = (args) => <CodeListSelector {...args} />;

_CodeListSelector_.bind({});
_CodeListSelector_.args = {}