function unique(input) {
    let reg=/\w+/g;

let uniqueItems=new Set();
    for (let str of input) {
       str = str.toLowerCase().match(reg).forEach(function (word) {
            if(!uniqueItems.has(word)){
                uniqueItems.add(word)
            }
        });
    }
    console.log(Array.from(uniqueItems).join(', '));

}



unique(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
    "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
    " Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
    "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
    " Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
    "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
    "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."]);