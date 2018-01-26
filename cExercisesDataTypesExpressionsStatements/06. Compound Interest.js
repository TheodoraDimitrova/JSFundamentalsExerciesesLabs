function calc(input) {
    p = input[0];
    i = input[1] / 100;
    n = 12/input[2];
    t = input[3];

//A = P (1 + r/n) (nt)
    res = p * (Math.pow(1 + i / n, n * t));
    return res.toFixed(2);


}
console.log(calc([100000, 5, 12, 25]));