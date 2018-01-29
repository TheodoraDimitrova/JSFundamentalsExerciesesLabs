function checkAndOfString(string, word) {
    let lastIndex = string.length;
    let len = word.length;
    let res = string.substr(lastIndex -len);

    if(res===word){
        console.log(true);
    }else{
        console.log(false);
    }

}
checkAndOfString("This sentence ends with fun?", "fun?");
//"This is Houston, we have…","We have…"
