import React from 'react';
import constants from '../../../GP4You/constants';
import GPTeamPlanning from './GPTeamPlanning.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Monthly/GPTeamPlanning`,
    component: GPTeamPlanning,
    argTypes : {
        dossier : {
            table : {disable : true}
        }
    }
    
};

export const _GPTeamPlanning_ = (args) => <GPTeamPlanning {...args} />;

_GPTeamPlanning_.bind({});
_GPTeamPlanning_.args = {}