function sortArrayTwoCriteria(input) {
    input.sort();
    let len=input.sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return a.length - b.length;
    });
return len.join("\n");
}
console.log(sortArrayTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));

//["alpha", "beta", "gamma"]
//["Isacc", "Theodor", "Jack", "Harrison", "George"]