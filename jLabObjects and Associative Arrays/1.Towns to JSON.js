function towns(input){
    let objKeys=input[0].split("|").filter(word=>word!=="");
    let town=objKeys[0].trim();
    let lat=objKeys[1].trim();
    let long=objKeys[2].trim();
   res=[];
    for (let row of input.splice(1)) {
        let obj={};
        row=row.split("|").filter(word=>word!=="");

        obj[town]=row[0].trim();
        obj[lat]=parseFloat(row[1].trim());
        obj[long]=parseFloat(row[2].trim());
        res.push(obj);

    }
    console.log(JSON.stringify(res));

}

towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);