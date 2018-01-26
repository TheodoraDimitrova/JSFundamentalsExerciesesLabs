function cookingByNums(input) {
    let num = input[0];

    let chop = (num) => num / 2;
    let dice = (num) => Math.sqrt(num);
    let spice = (num) => ++num;
    let bake = (num)=>num*3;
    let fillet = (num)=> num - (num * 0.2);

    for (let i = 1; i < input.length; i++) {
        let operation = input[i];
        if (operation === 'chop') {
            console.log(num = chop(num));
        } else if (operation === 'dice') {
            console.log(num = dice(num));
        } else if (operation === 'spice') {
            console.log(num = spice(num));
        } else if (operation === 'bake') {
            console.log(num = bake(num));
        } else if (operation === 'fillet') {
            console.log(num = fillet(num));
        }


    }


}
cookingByNums([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
//[9, 'dice', 'spice', 'chop', 'bake', 'fillet']
//[32, 'chop','chop', 'chop', 'chop', 'chop']