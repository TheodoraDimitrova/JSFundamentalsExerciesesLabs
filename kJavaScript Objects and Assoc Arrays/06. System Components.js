function system(input) {
    let res=new Map();
    for (let str of input) {
       let arr=str.split(" | ");
       let systemName=arr[0];
       let componentName=arr[1];
       let subcomponentName=arr[2];

        if(!res.has(systemName)){
           res.set(systemName,new Map())
       }
       if(!res.get(systemName).has(componentName)){
           res.get(systemName).set(componentName,[]);
       }

       res.get(systemName).get(componentName).push(subcomponentName)

    }
     let result=Array.from(res).sort();

    for (let system of result) {
        console.log(system[0]);
        for (let arr of system[1].entries()) {
            console.log("|||"+arr[0]);
            arr[1].forEach(el=>console.log("||||||"+el));

        }

    }

}
system(["SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security"
]);