function isPalindrome(string) {
   splitString = string.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    if(string===joinArray){
        return "true";
    }else{
        return "false";
    }


}
console.log(isPalindrome("abba"));
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    if(newString===str){
        return "true";
    }else{
        return "false";
    }
}
console.log(reverseString("abba"));