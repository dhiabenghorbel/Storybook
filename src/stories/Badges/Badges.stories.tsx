import React from 'react';
import constants from '../../GP4You/constants';
import Badges from './Badges.tsx';

export default {
    title: `${constants.menuPath}/Badges/Index`,
    component: Badges,
    argTypes : {
        documents : {
            type : 'object',
            defaultValue : {
                dms: 0,
                cms: 0
            }
        },
        loading : {
            table : {disable : true}
        }
    }
};

export const _Index_ = (args) => <Badges {...args} />;

_Index_.bind({});