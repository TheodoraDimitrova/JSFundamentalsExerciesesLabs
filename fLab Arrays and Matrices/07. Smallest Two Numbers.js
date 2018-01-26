function minMax(input) {
    let res=[];
    let num1=Math.min.apply(null, input);
  res.push(input.splice(input.indexOf(num1), 1));//// Find the index position of "num1" then remove one element from that position
    let num2=Math.min.apply(null, input);
    res.push(input.splice(input.indexOf(num2), 1));

   // res.forEach(el=>console.log(el.toString()));
    console.log(res.join(" "));


}
minMax([3, 0, 10, 4, 7, 3]);