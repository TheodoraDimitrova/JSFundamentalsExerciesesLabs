// function rouding([num, precision]) {
//     return num.toFixed(precision);
// }


function round([number, precision]) {
    let factor = Math.pow(10, precision);//10 na n-ta stepen
    let tempNumber = number * factor;
    let roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;

}
 console.log(round([3.1415926535897932384626433832795, 2]));