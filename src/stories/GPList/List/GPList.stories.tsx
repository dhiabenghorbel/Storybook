import React from 'react';
import constants from '../../../GP4You/constants';
import GPList from './GPList.tsx';

export default {
    title: `${constants.menuPath}/GPList/List/GPList`,
    component: GPList,
    argTypes : {
        externalElements : {
            table : {disable : true}
        },
        gps : {
                type : 'object',
                defaultValue : [
                    {apiLabel:"Hour natures", implemented :true , name : "AGD05LM0"},
                    {apiLabel:"Activities schedule", implemented :true , name : "AGC05E00"},
                    {apiLabel:"Counters", implemented :true , name : "AGC05CE0"}
                ]
        },
        location : {
            type : 'object',
            defaultValue : {pathname : "/AGD05LM0"}
        },
    }

};

export const _GPList_ = (args) => <GPList  {...args} />;

_GPList_.bind({}); 

_GPList_.args = {
}