import BaseData from "./_base_data.ts";
import DateString from "./_date_string.ts";
import DateTerminator from "./_date_terminator.ts";



class TimeConverter extends BaseData{


    toChain(): string{
        return new DateString(this._date).timeToday()
    }

    toChainTitles(){
        return new DateString(this._date).dayMonth();
    }

    toChatList() {
        if (new DateTerminator(this._date).isToday()){
            return new DateString(this._date).timeToday()
        } if (new DateTerminator(this._date).inThisYear()) {
            if (new DateTerminator(this._date).inThisMonths()) {
                if (new DateTerminator(this._date).isYesterday()) {
                    return DateString.yesterday();
                }
                if (new DateTerminator(this._date).isDayBeforeYesterday()) {
                    return DateString.dayBeforeYesterday();
                }
            }
            return new DateString(this._date).dayMonth()
        }
        return new DateString(this._date).dayMonthYear();
    }

}

export default TimeConverter