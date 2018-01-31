function validateEmail(input) {
    let reg=/^[A-Za-z0-9]+@[a-z]+.[a-z]+$/;
    if(input.match(reg)){
        console.log("Valid");
    }else{
        console.log("Invalid");
    }

}
validateEmail("valid@emai1.bg");