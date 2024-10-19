import React from 'react';
import constants from '../../../GP4You/constants';
import PrintIt from './PrintIt.tsx';

export default {
    title: `${constants.menuPath}/GPLayout/PrintIt`,
    component: PrintIt,
    argTypes : {
        right : {
            table : {disable : true}
        },
        left : {
            table : {disable : true}
        }
    }
};

export const _PrintIt_ = (args) => <PrintIt {...args} />;

_PrintIt_.bind({});
_PrintIt_.args = {
}