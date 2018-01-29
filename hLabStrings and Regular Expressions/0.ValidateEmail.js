//Creation of a regexp object
let emailRegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
//Give a value to bad_mail and good_mail
//variables to have both messages
//"bad_mail is a bad mail" and "good_mail is a good mail"
let bad_mail = "";
let good_mail = "";

if (emailRegExp.test(good_mail)){
    console.log("good_mail is a good mail");
}
if (!emailRegExp.test(bad_mail)){
    console.log("bad_mail is a bad mail");
}