function addAndRemove(input) {
    let addCounter = 0;
    let removeCounter = 0;
    let res = [];

    for (let index = 0; index < input.length; index++) {
        if (input[index] === "add") {
            addCounter++;
            res.push(parseInt(index) + 1);
        } else if (input[index] === "remove") {
            removeCounter++;
            res.pop();
        }

    }
    if (addCounter === 0  || addCounter===removeCounter) {
        console.log("Empty");
    }

    console.log(res.join("\n"));

}
addAndRemove(["add","remove", "add", "remove"]);

//["add","add", "add", "add"]
//['add', 'add', 'remove', 'add', 'add']