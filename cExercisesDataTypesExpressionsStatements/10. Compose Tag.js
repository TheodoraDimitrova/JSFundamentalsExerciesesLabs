function composeTag(input) {
    let img = input[0];
    let alt = input[1];

    console.log("<img src="
        + "\""
        + img + "\" " + "alt=" + "\"" + alt + "\"" + ">");

    }
composeTag(['smiley.gif', 'Smiley Face']);