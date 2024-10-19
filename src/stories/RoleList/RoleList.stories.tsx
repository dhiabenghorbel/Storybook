import React from 'react';
import constants from '../../GP4You/constants';
import RoleList from './RoleList.tsx';

export default {
    title: `${constants.menuPath}/RoleList/RoleList`,
    component: RoleList,
    argTypes : {
        roles : {
            control: {
                type: 'object',
              },
            defaultValue :  [
                {name : "role1" , label: "Employee" , category  :"SSEMP"},
                {name : "role2" , label: "Manager" , category  :"SSMNG"}
            ]  
        }
    }
    
};

export const _RoleList_ = (args) => <RoleList {...args} />;

_RoleList_.bind({});
_RoleList_.args = {

}