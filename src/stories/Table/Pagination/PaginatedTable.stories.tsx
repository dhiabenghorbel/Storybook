import React from 'react';
import constants from '../../../GP4You/constants';
import PaginatedTable from './PaginatedTable.tsx';

export default {
    title: `${constants.menuPath}/Table/Pagination/PaginatedTable`,
    component: PaginatedTable,
    argTypes : {
        tableFields: {
            control: {
              type: 'object',
            },
            defaultValue: [
                { selectable: true, label: "selected", translatedValue: true, translatedHeader: false, size : "" ,radio : false , button : false},
                { selectable: false, label: "date", translatedValue: true, translatedHeader: false, size : "" , radio : false , button : false},
                { selectable: false, label: "gpid", translatedValue: true, translatedHeader: false, size : "" , radio : false , button : false },
                { selectable: false, label: "message", translatedValue: true, translatedHeader: false,  size : "" ,radio : false , button : false},
                { selectable: false, label: "recipient", translatedValue: true, translatedHeader: false, size : "" , radio : false , button : false }
              ]
          },
          elements: {
            control: {
              type: 'object',
            },
            defaultValue: [{ date: "2023/03/10" , gpid: "ASW0ESE0" , message: "MESSAGE" , recipient: "Manager"} , 
            { date: "2023/10/12" , gpid: "ASW0E5E0" , message: "MESSAGE" , recipient: "Employee"} , 
            { date: "2023/11/06", gpid: "ASW000E0" , message: "MESSAGE" , recipient: "Manager"}]
          },
          },

};

export const _PaginatedTable_ = (args) => <PaginatedTable {...args} />;

_PaginatedTable_.bind({});
_PaginatedTable_.args = {
}