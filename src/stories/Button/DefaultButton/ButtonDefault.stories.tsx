import React from 'react';
import constants from '../../../GP4You/constants';
import ButtonDefault from './ButtonDefault.tsx';

export default {
    title: `${constants.menuPath}/Button/ButtonDefault`,
    component: ButtonDefault ,
    argTypes: {
        bubble: { 
            table : {disable: true },
        },
        notTranslated: { 
            table : {disable: true },
        },  
        info: { 
            table : {disable: true },
        }, 
        onClick: { 
            table : {disable: true },
        }, 
        isMenu: { 
            table : {disable: true },
        }
    }
};

export const _ButtonDefault_ = (args) => <ButtonDefault {...args} />;

_ButtonDefault_.bind({});
_ButtonDefault_.args = {

}