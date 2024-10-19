import React from 'react';
import constants from '../../../GP4You/constants';
import MonthCalendar from './MonthCalendar.tsx';

export default {
    title: `${constants.menuPath}/Calendar/Monthly/MonthCalendar`,
    component: MonthCalendar,
    argTypes : {
        absences : {
            type : 'object',
            defaultValue : {
            "06/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
            "07/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
            "09/05/2023" : {code:"MAL",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Sickness",style1:"SICKNESS",style2:undefined},
            "10/05/2023" : {code:"MAL",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Sickness",style1:"SICKNESS",style2:undefined},
            "13/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
            "14/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
            "20/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
            "21/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
            "24/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Holiday reason",style1:"HOLIDAYS",style2:undefined},
            "25/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"Holiday reason",style1:"HOLIDAYS",style2:undefined},
            "27/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
            "28/05/2023" : {code:"",halfDayType:" ",isHalfDay:false,isPending:false,nulign:"2",priority:"25",reason:"dayOff",style1:"DAYOFF",style2:undefined},
        }},
        days : {
            table : {disable : true}
        },
        year : { 
                type : 'select',
                options : [
                        "1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000",
                        "2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011",
                        "2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022",
                        "2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033"],
                defaultValue : "2023"
        },  
        month : { 
                type : 'select',
                options : [1,2,3,4,5,6,7,8,9,10,11,12],
                defaultValue: 5
        }
    }
};

export const _MonthCalendar_ = (args) => <MonthCalendar {...args} />;

_MonthCalendar_.bind({});
_MonthCalendar_.args = {

}