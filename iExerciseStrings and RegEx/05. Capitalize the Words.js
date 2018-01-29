function capitalizeWords(string) {
    console.log(string
        .toLowerCase()
        .split(' ')
        .map(function (word) {

            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' '));



}
capitalizeWords("Capitalize these words");