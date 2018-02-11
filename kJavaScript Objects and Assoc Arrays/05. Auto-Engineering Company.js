function company(input) {

    let brands = new Map;
    for (let str of input) {
        let arr = str.split(" | ");
        let carBrand = arr[0];
        let carModel = arr[1];
        let producedCars = Number(arr[2]);
        if (!brands.has(carBrand)) {
            brands.set(carBrand, new Map);

        }
        if (!brands.get(carBrand).get(carModel)) {
            brands.get(carBrand).set(carModel, 0);
        }

        brands.get(carBrand).set(carModel, brands.get(carBrand).get(carModel) + producedCars);
    }
    for (let [k, v] of brands) {
        console.log(k);
        v.forEach((count, model) => console.log("###" + model + " -> " + count));

    }
}
company(["Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10"
]);