import React from 'react';
import constants from '../../GP4You/constants';
import Stepper from './Stepper.tsx';

export default {
    title: `${constants.menuPath}/Stepper`,
    component: Stepper,
    argTypes : {
        phases : {
            control : 'array',
            defaultValue : 
             ["Step 1" , "Step 2" , "Step 3"] 
        },
        
        
    }
};

export const _Stepper_ = (args) => <Stepper {...args} />;

_Stepper_.bind({});
_Stepper_.args = {

}