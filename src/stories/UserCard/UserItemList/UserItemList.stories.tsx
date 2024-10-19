import React from 'react';
import constants from '../../../GP4You/constants';
import UserItemList from './UserItemList.tsx';

export default {
    title: `${constants.menuPath}/UserCard/UserItemList`,
    component: UserItemList,
    argTypes: {
        userInfo: { 
            table : {disable: true },
        },
        onClick: { 
            table : {disable: true },
        },
        numero: { 
            table : {disable: true },
        },
        defaultStyle : { 
            table : {disable: true },
        },
    }
};

export const _UserItemList_ = (args) => <UserItemList {...args} />;

_UserItemList_.bind({});
_UserItemList_.args = {}