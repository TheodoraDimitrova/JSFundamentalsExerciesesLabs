function find(input) {

    for (let i = 0; i < input.length; i+= 2) {
        let x = input[i];
        let y = input[i + 1];


        let location = getLocation(x, y);
        console.log(location);
    }
    function getLocation(x, y) {

        //tuvalo
        let tuvalox1 = 1;
        let tuvalox2 = 3;

        let tuvaloy1 = 1;
        let tuvaloy2 = 3;

        //Tonga
        let tongax1 = 0;
        let tongax2 = 2;

        let tongay1 = 6;
        let tongay2 = 8;

        //samoa
        let samoax1 = 5;
        let samoax2 = 7;
        let samoay1 = 3;
        let samoay2 = 6;

        //kuk
        let kukx1 = 4;
        let kukx2 = 9;

        let kuky1 = 7;
        let kuky2 = 8;
        //Tokelau
        let tokelaux1 = 8;
        let tokelaux2 = 9;

        let tokelauy1 = 0;
        let tokelauy2 = 1;


        if (x >= tuvalox1 && x <= tuvalox2 && y >= tuvaloy1 && y <= tuvaloy2) {
            return "Tuvalu";
        } else if (x >= tongax1 && x <= tongax2 && y >= tongay1 && y <= tongay2) {
            return "Tonga";
        } else if (x >= samoax1 && x<= samoax2 && y >= samoay1 && y <= samoay2) {
            return "Samoa";
        } else if (x >= kukx1 && x <= kukx2 && y >= kuky1 && y <= kuky2) {
            return "Cook";
        } else if (x >= tokelaux1 && x <= tokelaux2 && y >= tokelauy1 && y <= tokelauy2) {
            return "Tokelau";
        } else {
            return "On the bottom of the ocean";
        }

    }
}
find([6, 4]);


