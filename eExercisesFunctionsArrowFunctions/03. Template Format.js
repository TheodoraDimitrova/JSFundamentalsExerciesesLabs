function templFormat(input) {
    res =`<?xml version="1.0" encoding="UTF-8"?>
<quiz>`+'\n';
    for (let i = 0; i < input.length; i += 2) {
        let ques = input[i];
        res+=printQuestion(ques);
        let ans = input[i + 1];
       res+=printAnswer(ans);

    }
    function printQuestion(text) {
        res = `  <question> \n ${ text} \n </question> \n`;
        return res;
    }

    function printAnswer(text) {
        res = `<answer> \n ${ text} \n</answer> \n`;
        return res;
    }


    res+=`</quiz>`;
    return res;

}
console.log(templFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
));