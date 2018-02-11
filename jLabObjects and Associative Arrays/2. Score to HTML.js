function scoreHTML(input) {
    let arr = JSON.parse(input);//[ { name: 'Pesho', score: 479 }, { name: 'Gosho', score: 205 } ]
    let res = `<table>\n`;
 res+=`<tr><th>name</th><th>score</th></tr>
`;
    for (let obj of  arr) {


        res += `<tr><td>${escapeChars(obj['name']+"")}</td><td>${escapeChars(obj["score"]+"")}</td></tr>\n`

    }
    res += `</table>`;

    console.log(res);
    function escapeChars(str) {
        return str.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;');


    }

}
scoreHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');