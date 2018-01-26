function colorNums(number) {

    console.log("<ul>");
    for (let i = 1; i <= number; i++) {
        let color='green';
        if (i % 2 === 0) {
            color = 'blue';
        }
        console.log(`<li><span style='color: ${color}'>${i}</span></li>\n`);


    }
    console.log("</ul>")

}
colorNums(10);