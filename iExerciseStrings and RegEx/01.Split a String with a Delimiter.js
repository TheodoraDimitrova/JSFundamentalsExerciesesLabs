function  main(string,delimeter) {

    let arr=string.split(delimeter);
    for (let word of arr) {
        console.log(word);
    }

}
main('http://platform.softuni.bg','.');