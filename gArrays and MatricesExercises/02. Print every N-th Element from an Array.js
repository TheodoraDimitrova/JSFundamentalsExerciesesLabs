function elementByStep(input) {
   let  step=parseInt(input.pop());//2
    for (let i = 0; i < input.length; i+=step) {
        if (i === 0) {
            console.log(input[i]);
        } else {
            console.log(input[i]);
        }
    }

}
elementByStep([5, 20, 31, 4, 20, 2]);
//[dsa,asd, test, tset, 2]
//[5, 20, 31, 4, 20, 2]