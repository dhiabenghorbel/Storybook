import React from 'react';
import constants from '../../GP4You/constants';
import DiagnosticCog from './DiagnosticCog.tsx';

export default {
    title: `${constants.menuPath}/Diagnostic/DiagnosticCog`,
    component: DiagnosticCog,
    argTypes : {
    
}
};

export const _DiagnosticCog_ = (args) => <DiagnosticCog {...args} />;

_DiagnosticCog_.bind({});
_DiagnosticCog_.args = {

}