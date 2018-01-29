function concat(input) {
    let res=input.join("").split("").reverse().join("");
    console.log(res);

}
concat(['I', 'am', 'student']);