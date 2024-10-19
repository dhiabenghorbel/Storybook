import React from 'react';
import constants from '../../GP4You/constants';
import SearchModal from './SearchModal.tsx';

export default {
    title: `${constants.menuPath}/Search/SearchModal`,
    component: SearchModal,
    parameters: {
        backgrounds: {
          default: "gray",
          values: [
            {
              name: "gray",
              value: "#f2f2f2",
            },
          ],
        },
    },
    argTypes : {
        setQuery : {
            table : {disable : true}
        },
        query : {
            table : {disable : true}
        },
        searchParams : {
          type : 'object',
          defaultValue :[
            {
              filterType:"select-autocomplete",
              filterable:true,
              isDateValue:true,
              label:"Search",
              selectable:false,
              sortable:true,
              translatedHeader:true,
              translatedValue:false
              },
            {
              filterable:true,
              label:"Title",
              selectable:false,
              sortable:true,
              translatedHeader:true,
              translatedValue:false
            },
            {
              filterType:"boolean",
              filterable:true,
              isDateValue:true,
              label:"Switch",
              selectable:false,
              sortable:true,
              translatedHeader:true,
              translatedValue:false
            },
            {
              filterType:"date",
              filterable:true,
              isDateValue:true,
              label:"Date",
              selectable:false,
              sortable:true,
              translatedHeader:true,
              translatedValue:false
            }, 
            {
              filterType:"select",
              filterable:true,
              label:"language",
              selectable:false,
              sortable:true,
              translatedHeader:true,
              translatedValue:false,
              urlKey:"languages",
              options : [{value : "1", label: "Spanish"},{value : "2", label: "English"},{value : "3", label: "French"}]
            }
          ]
      },  
    }
};

export const _SearchModal_ = (args) => <SearchModal {...args} />;

_SearchModal_.bind({});
_SearchModal_.args = {}