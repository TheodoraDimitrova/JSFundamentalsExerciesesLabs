
function pointRect([x, y, xMin, xMax, yMin , yMax ]) {

    if(x>=xMin && x<=xMax && y>=yMin && y<=yMax  ){
        return "inside";

    }else{
        return "outside";
    }
}
console.log(pointRect([8,-1 ,2 ,12 ,12 ,-3 ,3]));