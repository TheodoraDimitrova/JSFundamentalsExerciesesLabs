function TriangleOfStars(n) {
    num=n;
    function firstPart(num) {
        for (let i = 0; i <= num; i++) {
            console.log("*".repeat(i));

        }


    }
    function secondPart(num) {
        for (let i = num-1; i >0; i--) {
            console.log("*".repeat(i));

        }
    }
    firstPart(num);
    secondPart(num);


}

TriangleOfStars(2);