function findAllNums(input) {
    let text= input.join(" ");
    let reg=/\d+/g;
    let numbers=text.match(reg);
    console.log(numbers.join(" "));

    // let res = [];
    // for (let string of input) {
    //     let regexp = /[0-9]+/g;
    //     let found = string.match(regexp);
    //     if (found === null){
    //
    //     }else if(found.length>1){
    //        found.forEach(num=>res.push(num));
    //     }else{
    //         res.push(found.toString())
    //     }
    //
    //
    // }
    // console.log(res.join(" "));
}
findAllNums(["The300", "What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]);

