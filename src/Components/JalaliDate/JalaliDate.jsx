import React from "react";
import moment from "moment-jalaali";
export default function JalaliDate (date){
    console.log(date);
    return moment(date, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
}