import React from 'react';
import constants from '../../../GP4You/constants';
import HomeButton from './Home.tsx';

export default {
    title: `${constants.menuPath}/Button/HomeButton`,
    component: HomeButton,
    argTypes : {
        light : {
            table : {disable : true}
        }
    }
};

export const _HomeButton_ = (args) => <HomeButton {...args} />;

_HomeButton_.bind({});
_HomeButton_.args = {}