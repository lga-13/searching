import BaseData from "./_base_data.ts";
import DataParser from "./_dateParser.ts";



class DateTerminator extends BaseData{

    _today: DataParser = new DataParser(new Date())

    _parsedData(): DataParser {return new DataParser(this._date)}

    isToday() {
        return (
            this._parsedData().day === this._today.day
            && this._parsedData().month === this._today.month
            && this._parsedData().year === this._today.year
        )
    }

    inThisYear(){
        return this._parsedData().year === this._today.year
    }

    inThisMonths(){
        return this._parsedData().month === this._today.month

    }

    isYesterday(){
        return this._parsedData().day === this._today.day - 1
    }

    isDayBeforeYesterday(){
        return this._parsedData().day === this._today.day - 2
    }
}

export default DateTerminator