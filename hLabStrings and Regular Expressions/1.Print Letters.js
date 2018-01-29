function printLetters(string) {
    let arrStr=string.split("");
    for (let index in arrStr) {
        console.log(`str[${index}] -> ${arrStr[index]}`);
    }

}
printLetters('Hello, World!');