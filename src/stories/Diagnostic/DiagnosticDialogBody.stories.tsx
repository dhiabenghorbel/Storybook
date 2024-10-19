import React from 'react';
import constants from '../../GP4You/constants';
import DiagnosticDialogBody from './DiagnosticDialogBody.tsx';

export default {
    title: `${constants.menuPath}/Diagnostic/DiagnosticDialogBody`,
    component: DiagnosticDialogBody,
    argTypes : {
        content : {
            type : 'object',
            defaultValue : {
                product:"GP4You-RD",
                version:"1.2.3-rc1",
                author:"SOPRA-HR-GP4You-RD-Team",
                mode:"NETWORK_MODE",
                action:"HTTP Request",
                timestamp:"05/05/2023 11:49:38",
                data:[
                  {item: "Status", value: "Pending"},
                  {item: "Method", value: "GET"}
                ]
              }
        }
    }
};

export const _DiagnosticDialogBody_ = (args) => <DiagnosticDialogBody {...args} />;

_DiagnosticDialogBody_.bind({});
_DiagnosticDialogBody_.args = {}