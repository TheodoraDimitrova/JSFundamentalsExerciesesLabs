function getLimit(input) {
    let speed = input[0];
    let zone =input[1];
    let limit = getLimit(zone);//50
    let infraction = get_infraction(speed, limit);


    function getLimit(zone) {
        let limit = 0;
        if (zone === 'motorway') {
            limit = 130;
        }
        else if (zone === 'interstate') {
            limit = 90;
        }
        else if (zone === 'city') {
            limit = 50;
        }
        else if (zone === 'residential') {
            limit = 20;
        }
        else {

           return "Not valid input";
        }
        return limit;
    }
    function get_infraction(speed, limit) {
        let overSped = speed - limit;
        if (overSped <= 0) {
            return false;
        } else {
            return true;
        }

    }



    let overSped = speed - limit;

    if (infraction) {
        if (overSped <= 20) {
            console.log("speeding");
        }
        else if (overSped <= 40) {
            console.log("excessive speeding");
        }
        else {
            console.log("reckless driving");
        }
    }
    else {console.log(" ");}
}
getLimit([21, 'residential']);
//[21, residential]