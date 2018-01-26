function daysOfWeek(day) {


    daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    index = daysInWeek.indexOf(day);
     return index>-1 ? index + 1 :"error";


}

console.log(daysOfWeek("Monday"));