function a(input){
    let curNum=0;
    let nextNum=0;
    let  res=[];
    res.push(input[0]);
    for (let i = 1; i < input.length; i++) {
        curNum=res[res.length-1];
        nextNum=input[i];
        if(nextNum>curNum || curNum===nextNum){
            res.push(nextNum);
        }

    }
    console.log( res.join("\n"));

}
a([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//[1, 3, 8, 4, 10, 12, 3, 2, 24]
//[1, 2, 3, 4]
//[20, 3, 2, 15, 6, 1 ]