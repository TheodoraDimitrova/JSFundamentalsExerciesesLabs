function magicMatrix(input) {
   let sumFirstEl = 0;
  let  sumMiddleEl = 0;
   let sumLastEl = 0;

    for (let i = 0; i < input.length; i++) {

        sumLastEl += input[i][input.length - 1];//nai zadniq element
        sumFirstEl += input[i][0];//purvi el
        sumMiddleEl += input[i][1];//sreden
    }
    function getSum(total, num) {
        return total + num;
    }

    if (input[2].reduce(getSum) === input[1].reduce(getSum) && input[1].reduce(getSum) === input[0].reduce(getSum)
        && sumLastEl === sumMiddleEl && sumMiddleEl === sumLastEl) {
        console.log(true);
    } else {
        console.log(false);
    }

}
magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);