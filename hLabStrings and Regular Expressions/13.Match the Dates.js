function matchTheDates(input) {
    let regex = /\b(\d{1,2})-([A-Z]{1}[a-z]{2})-(\d{4}\b)/g;

    for(let sentence of input) {
        while(match = regex.exec(sentence)) {
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
            //console.log(match);
        }
    }
}
matchTheDates(["1-Jan-1999 is a valid date.",
    "So is 01-July-2000.",
    "I am an awful liar, by the way – Ivo, 28-Sep-2016."]);