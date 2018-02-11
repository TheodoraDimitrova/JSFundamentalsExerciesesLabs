function nestedMap(input) {
    let towns = new Map();
    for (let str of input) {
        arr = str.split(" -> ");
        town = arr[0];
        product = arr[1];
        value = arr[2].split(" : ").reduce(function (a, b) {return a * b;});
        if (!towns.has(town)) {
           towns.set(town,new Map())
        }if(! towns.get(town).has(product)) {
            towns.get(town).set(product, 0);
        }
        towns.get(town).set(product, towns.get(town).get(product) + value);


    }
    for(let [town, product] of towns) {
        console.log(`Town - ${town}`);

        for(let [product, income] of towns.get(town)) {
            console.log(`$$$${product} : ${income}`);
        }
    }

}
nestedMap(["Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
    "Sofia -> Audi Q7 -> 200 : 100000",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3"]);