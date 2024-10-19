import React from 'react';
import constants from '../../GP4You/constants';
import DiagnosticModeSelector from './DiagnosticModeSelector.tsx';

export default {
    title: `${constants.menuPath}/Diagnostic/DiagnosticModeSelector`,
    component: DiagnosticModeSelector,
    argTypes : {
        onChange : {
            table : {disable:true}
        }
}
};

export const _DiagnosticModeSelector_ = (args) => <DiagnosticModeSelector {...args} />;

_DiagnosticModeSelector_.bind({});
_DiagnosticModeSelector_.args = {

}