function checkStart(string,word) {

    let len=word.length;
    let res = string.substr(0, len);
    if(res===word){
        console.log("true");
    }else{
        console.log(false);
    }

}
checkStart("The quick brown fox…","The quick brown fox…");
//"The quick brown fox…","The quick brown fox…"
//"How have you been?","how"