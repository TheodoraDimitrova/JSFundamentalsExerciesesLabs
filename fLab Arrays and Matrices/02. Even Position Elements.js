function evenPos(input) {

    for (let index in input) {
        if(index %2===0){
            process.stdout.write(input[index]+" ");
        }

    }

}
evenPos(['20', '30', '40']);