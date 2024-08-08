
import moment from "moment-jalaali";
export default function JalaliDate (date){
    return moment(date, 'YYYY-MM-DD').format('jYYYY/jMM/jDD');
}