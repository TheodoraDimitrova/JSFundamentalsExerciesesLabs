function chessbord(size) {

    for (let row = 1; row <= size; row++) {
        colorcol = `<div class="chessboard">`;
        if (row % 2 !== 0) {//ne chetni redove->zapochvat s cherno
            for (let col = 1; col <= size; col++) {
                if (col % 2 !== 0) {
                    colorcol += "black";
                } else {
                    colorcol += "white";
                }

            }


        } else {//chetnite s bqlo
            for (let col = 1; col <= size; col++) {
                if (col % 2 !== 0) {
                    colorcol += "white";
                } else {
                    colorcol += "black";
                }
            }


        }
        console.log(colorcol += "</div>");

    }

}
chessbord(5);