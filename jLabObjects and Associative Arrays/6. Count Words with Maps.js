function countMap(input) {
    let myMap=new Map();
    let reg=/[a-z]+/gi;
    for (let str of input) {
       arrWords=str.toLowerCase().match(reg);
       arrWords.forEach(function (word) {
           if(myMap.has(word)){
              myMap.set(word,myMap.get(word)+1);
           }else{
               myMap.set(word,1);
           }
       })
    }
    let sorted = Array.from(myMap.keys()).sort();
    for(let key of sorted) {
        console.log("'" + key + "'" + " -> " + myMap.get(key) + " times");
    }
}
countMap(["Far too slow, you're far too slow."]);