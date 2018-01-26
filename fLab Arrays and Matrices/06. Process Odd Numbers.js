function oddPoss(input) {
    arr = input.map(Number);

    console.log(arr.filter((num, index) => index % 2 == 1).map(num => num * 2).reverse().join(" "));
}

oddPoss([3, 0, 10, 4, 7, 3]);