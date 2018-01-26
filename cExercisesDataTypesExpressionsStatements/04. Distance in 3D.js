function distance([x1, y1, z1, x2, y2, z2]) {

    let point1 = {x: x1, y: y1, z: z1};
    let point2 = {x: x2, y: y2, z: z2};

    let disx = point1.x - point2.x;
    let disy = point1.y - point2.y;
    let disz = point1.z - point2.z;

    return Math.sqrt(disx * disx + disy * disy + disz * disz);


}
console.log(distance([3.5, 0, 1, 0, 2, -1]));