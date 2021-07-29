const inputDate = document.querySelector("#birthDate");
const checkBtn = document.querySelector(".checkBtn");


const checkPalindrome = (string) => {
    const length = string.length;
    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

checkBtn.addEventListener("click", ()=> {
    const date  = inputDate.value.split("-");
    const dd = date[2];
    const mm = date[1];
    const yyyy = date[0];
    const yy = yyyy[2]+yyyy[3];
    
    const yyyymmdd = yyyy+mm+dd;
    const ddmmyyyy = dd+mm+yyyy;
    const mmddyy = dd+mm+yy;
    const mmddyyyy = mm+dd+yyyy;

    // console.log(palindrome("yyyymmdd"));


    if(checkPalindrome(yyyymmdd)) {

    } else if(checkPalindrome(ddmmyyyy)) {

    } else if(checkPalindrome(mmddyy)) {

    } else if(checkPalindrome(mmddyyyy)) {

    } else {
        
    }

    // console.log(checkPalindrome(mmddyy));
});