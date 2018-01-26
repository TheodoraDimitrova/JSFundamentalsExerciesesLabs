

let addingNum=function (passed) {
    add=function (inner) {
        return passed+inner

    };
    return add;

};
let a=new addingNum(3);
let b= new addingNum(4);
let c= new addingNum(5);
console.log((a(1)));//4
console.log(b(2));//6
console.log(c(3));//8
