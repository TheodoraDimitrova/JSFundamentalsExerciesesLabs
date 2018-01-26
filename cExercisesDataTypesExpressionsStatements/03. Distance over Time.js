function distance([V1, V2, T]) {

    let A = {speed: V1, time: T};
    let B = {speed: V2, time: T};

    let dis1=A.speed*A.time;
    let dis2=B.speed*B.time;

    return Math.abs(dis1-dis2)/3600*1000;

}


console.log(distance([11, 10, 1200]));