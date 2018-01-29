function bill(input) {
    let sum=0;
    let products=[];
    for (let index in input) {
       if(index%2===0){
           products.push(input[index])

       }else{
           sum+=parseFloat(input[index]);
       }
    }
    console.log("You purchased "+products.join(", ")+" for a total sum of "+sum);

}
bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);