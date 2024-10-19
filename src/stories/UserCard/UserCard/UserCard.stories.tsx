import React from 'react';
import constants from '../../../GP4You/constants';
import UserCard from './UserCard.tsx';

export default {
    title: `${constants.menuPath}/UserCard`,
    component: UserCard,
    argTypes : {
        userInfo : {
            type : 'object',
            defaultValue : {matcle : "001078954", nmpres : "Fernando Torres", photoUrl : undefined}
        }
    }
};

export const _UserCard_ = (args) => <UserCard {...args} />;

_UserCard_.bind({});
_UserCard_.args = {}