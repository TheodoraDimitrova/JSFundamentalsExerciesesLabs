
function triarea(side1,side2,side3) {

     p = (side1+side2+side3)/2;
     a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
    return a;
}

console.log(triarea(2,3.5,4));