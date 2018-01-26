function negativePositiveNumbers(arr) {
    arr = arr.map(Number);
    let result = [];
    for(let element of arr) {
        if(element < 0) {
            result.unshift(element);
        } else {
            result.push(element);//0 ida tuk
        }
    }

    result.forEach(el => console.log(el));
}
negativePositiveNumbers([-2, 3, 0 , -1]);