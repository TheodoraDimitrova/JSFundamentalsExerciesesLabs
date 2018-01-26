function checkMoviePrices([movie,day]) {
    let movieName=movie.toLowerCase();
    let dayOf=day.toLowerCase();

    if(movieName==='the godfather'){

        switch(dayOf) {
            case "monday":
                return 12;
                break;
            case 'tuesday':
                return 10;
                break;
            case "wednesday":
                return 15;
                break;
            case 'thursday':
                return 12.5;
                break;
            case "friday":
                return 15;
                break;
            case "saturday":
                return 25;
                break;
            case "sunday":
               return 30;
                break;
            default:
                return "error";
        }

    }
    else if(movieName==="schindler\'s list"){

        switch(dayOf) {
            case "monday":
                return 8.50;
                break;
            case 'tuesday':
               return 8.50;
                break;
            case "wednesday":
                 return 8.50;
                break;
            case 'thursday':
                return 8.50;
                break;
            case "friday":
                return 8.50;
                break;
            case "saturday":
               return 15;
                break;
            case "sunday":
                return 15;
                break;
            default:
                return "error";
        }
    }
    else if(movieName==='casablanca'){

        switch(dayOf) {
            case "monday":
               return 8;
                break;
            case 'tuesday':
             return 8;
                break;
            case "wednesday":
                return 8;
                break;
            case 'thursday':
              return 8;
                break;
            case "friday":
              return 8;
                break;
            case "saturday":
                return 10;
                break;
            case "sunday":
                return 10;
                break;
            default:
                return "error";
        }


    }
    else {

        switch(dayOf) {
            case "monday":
              return 10;
                break;
            case 'tuesday':
               return 10;
                break;
            case "wednesday":
                return 10;
                break;
            case 'thursday':
                return 10;
                break;
            case "friday":
          return 10;
                break;
            case "saturday":
                return 15;
                break;
            case "sunday":
              return 15;
                break;
            default:
                return "error";
        }

    }
}

console.log(checkMoviePrices(["Schindler's List","Thursday"]));