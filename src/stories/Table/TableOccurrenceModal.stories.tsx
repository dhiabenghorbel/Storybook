import React from 'react';
import constants from '../../GP4You/constants';
import TableOccurrenceModal from './TableOccurrenceModal.tsx';

export default {
    title: `${constants.menuPath}/Table/TableOccurrenceModal`,
    component: TableOccurrenceModal,
    argTypes : {
        DetailForm : {
            table : { disable : true}
        },
        modalTag : {
            table : { disable : true}
        },
        population : {
            table : { disable : true}
        },
        domain : {
            table : { disable : true}
        },
        dossier : {
            table : { disable : true}
        },
        isDossierOccurrence : {
            table : { disable : true}
        },
    }
   
    
};

export const _TableOccurrenceModal_ = (args) => <TableOccurrenceModal {...args} />;

_TableOccurrenceModal_.bind({});
_TableOccurrenceModal_.args = {
}