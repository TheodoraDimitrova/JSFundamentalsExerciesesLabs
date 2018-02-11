function usernames(input) {

    let usernames = new Set();

    for(let username of input){
        usernames.add(username);
    }

    Array.from(usernames.keys()).sort((a, b) => sortUsernames(a, b)).forEach(u => console.log(u));

    function sortUsernames(a, b) {
        if(a.length !== b.length) {
            return(a.length - b.length);
        } else {
            return a.localeCompare(b);   //var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
                                        //items.sort((a, b) => a.localeCompare(b)); // ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
        }
    }
}
usernames(["Denise",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot"
]);