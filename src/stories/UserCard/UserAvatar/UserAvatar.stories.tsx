import React from 'react';
import constants from '../../../GP4You/constants';
import UserAvatar from './UserAvatar.tsx';

export default {
    title: `${constants.menuPath}/UserCard/UserAvatar`,
    component: UserAvatar,
    argTypes : {
        itemList : {
            table : {disable : true}
        }
    }
};

export const _UserAvatar_ = (args) => <UserAvatar {...args} />;

_UserAvatar_.bind({});
_UserAvatar_.args = {}