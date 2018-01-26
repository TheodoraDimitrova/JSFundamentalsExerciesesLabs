function modify(input) {
    let numAsStr = input.toString();
    let sum = sumDigits(numAsStr);

    while (sum / numAsStr.length <= 5) {
        numAsStr += '9';
        sum=sumDigits(numAsStr);
    }
    return numAsStr;


    function sumDigits(num) {
        let sum = 0;
        let no = parseInt(num);
        while (no > 0) {
            sum = sum + no % 10;
            no = Math.floor(no / 10);
        }
        return sum;

    }


}


console.log(modify(101));