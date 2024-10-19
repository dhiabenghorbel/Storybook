import React from 'react';
import constants from '../../GP4You/constants';
import MassiveGrid from './MassiveGrid.tsx';
import data from './data.json';

export default {
    title: `${constants.menuPath}/MassiveGrid`,
    component: MassiveGrid,
    argTypes : {
        data : {
            type : 'object',
            defaultValue : data
        }
    }
};

export const _MassiveGrid_ = (args) => <MassiveGrid {...args} />;

_MassiveGrid_.bind({});
_MassiveGrid_.args = {}