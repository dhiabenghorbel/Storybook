import React from 'react';
import constants from '../../../GP4You/constants';
import EventDetailsModal from './EventDetailsModal.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Day/EventDetailsModal`,
    component: EventDetailsModal,
    parameters: {
      backgrounds: {
        default: "gray",
        values: [
          {
            name: "gray",
            value: "#f2f2f2",
          }
        ],
      },
  },
    argTypes: {
      absence : {
          type : "object",
          defaultValue : {reason : "Holiday absence" , startDate : "2022/03/12" , endDate : "2022/03/13", isPending : true , isHalfDay : false , halfDayType : null}
        }
      }   
};

export const _EventDetailsModal_ = (args) => <EventDetailsModal {...args} />;

_EventDetailsModal_.bind({});
_EventDetailsModal_.args = {

}