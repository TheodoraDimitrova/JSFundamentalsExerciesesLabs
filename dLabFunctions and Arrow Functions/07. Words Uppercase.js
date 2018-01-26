//75%
function toUpper(input) {

    let clear = input.match(/[a-zA-Z]+/g);//return an Array

    let wordsUppercase = clear.map(function (item) {
        return item.toUpperCase();
    });
    console.log(wordsUppercase.join(", "));

}
toUpper('Hi, how are you?' );
//'Hi, how are you?'
//'Functions in JS-Fundamentals can be nested, i.e. hold other functions'