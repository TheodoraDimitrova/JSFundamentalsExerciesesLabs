function dna(n) {
    let seq = "ATCGTTAGGG";
    let seqLen = seq.length;
    let index = 0;
    for (let i = 1; i <= n; i++) {
        index = getIndex(index++, seqLen);
        let firstSym = seq.charAt(getIndex(index++, seqLen));
        index = getIndex(index++, seqLen);
        let secondSym = seq.charAt(getIndex(index++, seqLen));
        if (i % 4 === 1) {
            console.log(`**${firstSym}${secondSym}**`);
        } else if (i % 4 === 2 || i % 4 === 0) {
            console.log(`*${firstSym}--${secondSym}*`);
        } else {
            console.log(`${firstSym}----${secondSym}`);

        }

    }
    function getIndex(index, len) {

        if (index >= len) {
            index = 0;
        }
        return index;
    }
}
dna(10);