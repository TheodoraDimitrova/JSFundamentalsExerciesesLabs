

function distanceAB(input){
    let x1=input[0];
    let y1=input[1];
    let x2=input[2];
    let y2=input[3];


    let  distance=Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    distanceA(x1,y1);
    distanceB(x2,y2);
    if(  Number.isInteger(distance)|| distance===0 ){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid `);
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid `);

    }



    function distanceB(x2,y2){
        let beging1=0;
        let begining2=0;
        distance=Math.sqrt(Math.pow(x2 - beging1, 2) +Math. pow(y2 - begining2, 2));     //√ (x2-x1)2+(y2-y1)2
        if(Number.isInteger(distance)|| distance===0 ){
            console.log(`{${x2}, ${y2}} to {${beging1}, ${begining2}} is valid `);

        }else{
            console.log(`{${x2}, ${y2}} to {${beging1}, ${begining2}} is invalid `);

        }

    }
    function distanceA(x1,y1){
        let beging1=0;
        let begining2=0;
        distance=Math.sqrt(Math.pow(x1 - beging1, 2)+ Math.pow(y1 - begining2, 2));
        if(Number.isInteger(distance)|| distance===0 ){//edin ot testovete v judge e 0 0 0 0 pri koeto dopulvam proverkata specialno
            console.log(`{${x1}, ${y1}} to {${beging1}, ${begining2}} is valid `);//ako e cqlo chislo

        }else{
            console.log(`{${x1}, ${y1}} to {${beging1}, ${begining2}} is invalid `);////ako e realno chislo

        }
    }
}
distanceAB([2, 1, 1, 1]);