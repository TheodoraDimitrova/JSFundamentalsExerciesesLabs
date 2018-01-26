function firstLastK(input) {

        arr = input.map(Number);

        let count = arr.shift();
        console.log(arr.slice(0, count).join(" "));
        console.log(arr.slice(arr.length-count, arr.length).join(" "));


}
firstLastK([1,5]);