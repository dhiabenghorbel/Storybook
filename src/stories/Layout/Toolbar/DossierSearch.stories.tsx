import React from 'react';
import constants from '../../../GP4You/constants';
import DossierSearch from './DossierSearch.tsx';

export default {
    title: `${constants.menuPath}/Layout/Toolbar/DossierSearch`,
    component: DossierSearch,
      argTypes : {
        dossiers : {
            control : {
                type : 'object'
            },
            defaultValue : [
                {"@matcle" : "00112233" , "@nmpres" : "Santi Cazorla"},
                {"@matcle" : "00236574" , "@nmpres" : "Fernando Torres"}
            ]
        }
      }
    
};

export const _DossierSearch_ = (args) => <DossierSearch {...args} />;

_DossierSearch_.bind({});
_DossierSearch_.args = {

}