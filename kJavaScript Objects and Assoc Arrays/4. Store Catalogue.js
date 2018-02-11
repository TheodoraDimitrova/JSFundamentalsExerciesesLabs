function store(input) {

    let letters = [];
    for (let str of input) {
        strArr = str.split(" : ");
        let item = strArr[0];
        let price = Number(strArr[1]);
        let letter = str[0];
        if (!letters[letter]) {
            letters[letter] = [];
        }
        if (item[0] === letter) {
            letters[letter].push({["name"]: item, ['price']: price});
        }
    }


    let sorted_keys = Object.keys(letters).sort();
    let res = [];
    for (let key of sorted_keys) {
        res[key] = letters[key];
    }

    for (let key in res) {
        res[key].sort(function (a, b) {
            if (a['name'] < b['name']) {
                return -1;
            } else if (a['name'] > b['name']) {
                return 1;
            }
            return 0;
        });

    }
    for (let key in res) {
        console.log(key);
        res[key].forEach(el=>console.log(" "+el['name']+": "+el['price']));
    }
}
store(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]);