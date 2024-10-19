import React from 'react';
import constants from '../../../GP4You/constants';
import DossierListItem from './DossierListItem.tsx';

export default {
    title: `${constants.menuPath}/Layout/Toolbar/DossierListItem`,
    component: DossierListItem,
    argTypes : {
        dossierInfo: {
            control: {
              type: 'object',
            },
            defaultValue: 
                {"@matcle" : "001078954" , "@nmpres" : "Fernando Torres"}
              
          },
    }  
    
};

export const _DossierListItem_ = (args) => <DossierListItem {...args} />;

_DossierListItem_.bind({});
_DossierListItem_.args = {

}