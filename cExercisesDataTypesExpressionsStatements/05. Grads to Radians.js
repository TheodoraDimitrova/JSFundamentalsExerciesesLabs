function convert(grad) {
    grad = grad % 400;
    let degree = grad * 0.9;
    return degree < 0 ? 360 + degree : degree
}


console.log(convert(100));


// // Converts from degrees to radians.
//     Math.radians = function(degrees) {
//         return degrees * Math.PI / 180;
//     };
// // Converts from radians to degrees.
//     Math.degrees = function(radians) {
//         return radians * 180 / Math.PI;
//     };
//     console.log( Math.degrees(num));
//     console.log( Math.radians(num));