function expressionSplit(code) {
    code.split(/[\s(),;\.]/).filter(w => w !== "").forEach(w => console.log(w));
}
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');