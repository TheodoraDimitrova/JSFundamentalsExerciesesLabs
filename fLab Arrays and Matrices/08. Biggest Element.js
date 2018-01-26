function biggestNumMatrix(input) {
    let res=[];
    for(let i = 0; i < input.length; i++) {
        let inside= input[i];
        let bigNum=Math.max.apply(null, inside);
        res.push(bigNum);

    }
    return Math.max.apply(null, res);
}
console.log(biggestNumMatrix([[20, 50, 10], [8, 33, 145]]));
//[[20, 50, 10], [8, 33, 145]]
//[[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]