function draw(n) {
    res = "";
    staticRow = ("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+" + "\n");
    res += staticRow;
    if(n % 2===0){

        for (let i = 0; i < (n-1-3)/2; i++) {

            res+=("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|" + "\n");
        }
        res += staticRow;
        for (let i = 0; i <(n-1-3)/2; i++) {

            res+=("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|" + "\n");
        }

    }
    else{
        for (let i = 0; i <( n-3)/2; i++) {

            res+=("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|" + "\n");
        }
        res += staticRow;
        for (let i = 0; i <( n-3)/2; i++) {

            res+=("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|" + "\n");
        }


    }




    res += staticRow;
    console.log(res);
}
draw(7);