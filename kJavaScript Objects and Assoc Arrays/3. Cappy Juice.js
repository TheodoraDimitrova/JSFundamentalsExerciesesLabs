function juice(input) {
    let quantities = {};
    let bottles = {};
    for (let str of input) {
        str=str.split(" => ");
        let juiceName=str[0];
        let juiceQuantity = Number(str[1]);

        if(!quantities.hasOwnProperty(juiceName)) {
            quantities[juiceName] = 0;
        }
        quantities[juiceName] += juiceQuantity;


        if(quantities[juiceName] >= 1000) {
            bottles[juiceName] = parseInt(quantities[juiceName]/1000);
        }
    }
    for(let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}
juice(['Orange => 2000','Peach => 1432','Banana => 450','Peach => 600','Strawberry => 549']);