function wordOcc(string,search) {
    let reg=new RegExp("\\b"+search+"\\b","gi");
    let match=reg.exec(string);
    let counter=0;
    while (match){
        counter++;
        match=reg.exec(string)
    }
    console.log(counter);
}
wordOcc("There was one. Therefore I bought it. I wouldn’t buy it otherwise.","there");