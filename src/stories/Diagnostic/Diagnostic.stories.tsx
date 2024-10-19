import React from 'react';
import constants from '../../GP4You/constants';
import Diagnostic from './Diagnostic.tsx';

export default {
    title: `${constants.menuPath}/Diagnostic`,
    component: Diagnostic,
    argTypes : {
    
}
};

export const _Diagnostic_ = (args) => <Diagnostic {...args} />;

_Diagnostic_.bind({});
_Diagnostic_.args = {

}