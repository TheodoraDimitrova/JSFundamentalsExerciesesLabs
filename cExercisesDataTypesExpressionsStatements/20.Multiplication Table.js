function draw(n){
  res=`<table border="1">`+"\n";

    for (let rows = 0; rows <= n; rows++) {
        res+=`<tr>`;
        if(rows===0){
            res+=`<th>x</th>`;
            for (let col = 1; col <= n; col++) {
                res+=`<th>${col}</th>`;
            }
        }
        else{
            row=rows;
            res+=`<th>${row}</th>`;
            for (let col = 1; col <= n; col++) {
                res+=`<td>${col*row}</td>`;
            }
        }

        res+="\n";
        res+=`<tr>`;
    }
 return res+=`<table>`;
}

console.log(draw(5));