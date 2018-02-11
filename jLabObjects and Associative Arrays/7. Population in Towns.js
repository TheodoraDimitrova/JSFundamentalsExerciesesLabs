function population(input) {
    let res =new Map();
    for (let str of input) {
        arr=str.split("<->");
        let town = arr[0];
        let population = Number(arr[1]);

        if(res.has(town)){
            res.set(town,res.get(town)+population);

        }else{
            res.set(town,population);

        }
    }
    for (let [k,v] of res) {

        console.log(k+": "+v);

    }


}
population(["Istanbul <-> 100000",
"Honk Kong <-> 2100004",
"Jerusalem <-> 2352344",
"Mexico City <-> 23401925",
"Istanbul <-> 1000"]);