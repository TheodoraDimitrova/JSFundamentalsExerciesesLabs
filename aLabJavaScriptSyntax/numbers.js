function printRandNum() {

    let num = Math.round(Math.random() * 11);

    document.body.innerHTML +=

        `<div>${num}</div>`;

}