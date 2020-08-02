
import { ToPersian, ToGregorian } from 'ara-persian-cal';

Date.prototype.toPersian = () => ToPersian(this, 'YYYY/MM/DD');
export function ToMiladi(year, month, day) {
    return ToGregorian(year, month, day);
}

export function ToJalaliObject(input) {
    if (input == undefined) return { year: 0, month: 0, day: 0 };
    let date = ToPersian(input, 'YYYY/MM/DD');
    return { year: parseInt(date.substr(0, 4)), month: parseInt(date.substr(5, 2)), day: parseInt(date.substr(8, 2)) }
}
