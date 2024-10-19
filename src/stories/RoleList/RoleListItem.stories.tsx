import React from 'react';
import constants from '../../GP4You/constants';
import RoleListItem from './RoleListItem.tsx';

export default {
    title: `${constants.menuPath}/RoleList/RoleListItem`,
    component: RoleListItem,
    argTypes : {
        category : {
            control: 'radio',
            options  : ["SSMNG","SSEMP"]
        }
    }
    
};

export const _RoleListItem_ = (args) => <RoleListItem {...args} />;

_RoleListItem_.bind({});
_RoleListItem_.args = {

}