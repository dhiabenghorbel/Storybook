import React from 'react';
import constants from '../../../GP4You/constants';
import Header from './Header.tsx';

export default {
    title: `${constants.menuPath}/Layout/Header`,
    component: Header,
    
};

export const _Header_ = (args) => <Header {...args} />;

_Header_.bind({});
_Header_.args = {

}