function aggregateEl(input) {

   let sum  = (accumulator, currentValue) => accumulator + currentValue;
    console.log(input.reduce(sum));

    let inverse   = (suminrev, currentValue) => suminrev += 1/ currentValue;
    console.log(input.reduce(inverse,0));
    let concat  = input.join("");
    console.log(concat);
}
aggregateEl([2, 4, 8, 16]);