function rotateArray(input) {
    let times=parseInt(input.pop());


    for (let i = 0; i < times%input.length; i++) {
      input.unshift(input.pop());

    }
    console.log(input.join(" "));

}
rotateArray([1, 2, 3, 4, 2]);