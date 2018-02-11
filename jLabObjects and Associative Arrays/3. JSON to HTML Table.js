function jsonHTML(strInput) {
    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');


    }
    let arr=JSON.parse(strInput);
    let res=`<table>\n`;
    res+=`<tr>`;
    Object.keys(arr[0]).forEach(key =>res+=`<th>${key}</th>`);
    res+='</tr>\n';


    for (let obj of arr) {
        res+=`<tr>`;
        Object.values(obj).forEach(val=>res+=`<td>${escapeChars(val+"")}</td>`);
        res+=`</tr>\n`;
    }
    res+='</table>';
    console.log(res);

}
jsonHTML(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`);