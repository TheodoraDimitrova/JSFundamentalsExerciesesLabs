//2016, 9, 30
function nextDay(year, month, day) {
    d= new Date(year, month-1, day);
    let oneDay=24*60*60*1000;
    let nextDay=new Date(d.getTime()+oneDay);
    return nextDay.getFullYear()+"-"+(nextDay.getMonth()+1)+"-"+nextDay.getDate();

}





function calcNextDay(year, month, day)  {

    let date = new Date(year, month-1, day);

    let oneDay = 24 * 60 * 60 * 1000; // milliseconds in 1 day

    let nextDate = new Date(date.getTime() + oneDay);

    return nextDate.getFullYear() + "-" +

        (nextDate.getMonth() + 1) + '-' +

        nextDate.getDate();

}
console.log(nextDay(2016, 9, 30));
console.log(calcNextDay(2016, 9, 30));