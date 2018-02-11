function count(input) {
    let res={};
    let reg=/[a-z]+/gi;
    for (let str of input) {
       arrWord=str.match(reg);
       arrWord.forEach(function (word) {
           if(res.hasOwnProperty(word)){
               res[word]+=1;
           }else{
               res[word]=1;
           }

       })
    }
    console.log(JSON.stringify(res));
}
count(["JS devs use Node.js for server-side JS.-- JS for devs"]);