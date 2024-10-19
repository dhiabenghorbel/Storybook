import React from 'react';
import constants from '../../../GP4You/constants';
import UserDescription from './UserDescription.tsx';

export default {
    title: `${constants.menuPath}/UserCard/UserDescription`,
    component: UserDescription,
    argTypes: {
        numero: { 
            table : {disable: true },
    },
        itemList: { 
            table : {disable: true },
    },
}
};

export const _UserDescription_ = (args) => <UserDescription {...args} />;

_UserDescription_.bind({});
_UserDescription_.args = {

}