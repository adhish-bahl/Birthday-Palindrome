const inputDate = document.querySelector("#birthDate");
const checkBtn = document.querySelector(".checkBtn");
const output = document.querySelector(".output");
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

output.style.display = "none";


const checkPalindrome = (string) => {
    const length = string.length;
    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const checkNextDate = (dd, mm, yyyy) => {
    for(let i = 1; i > 0; i++) {
        dd++;
        if(daysInMonth[mm-1] < dd) {
            dd = 1;
            mm++;
            if(mm > 12) {
                mm = 1;
                yyyy++;
            }
        }
    }
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


    if(checkPalindrome(yyyymmdd)) {
        output.textContent = "Yeyeyeii, your Birthday in "+yyyy+"-"+mm+"-"+dd+"is a Palindrome!";
    } else if(checkPalindrome(ddmmyyyy)) {
        output.textContent = "Yeyeyeii, your Birthday in "+dd+"-"+mm+"-"+yyyy+"is a Palindrome!";
    } else if(checkPalindrome(mmddyy)) {
        output.textContent = "Yeyeyeii, your Birthday in "+mm+"-"+dd+"-"+yy+"is a Palindrome!";
    } else if(checkPalindrome(mmddyyyy)) {
        output.textContent = "Yeyeyeii, your Birthday in "+mm+"-"+dd+"-"+yyyy+"is a Palindrome!";
    } else {
        checkNextDate(dd, mm, yyyy, yy)
    }
    output.style.display = "block";
});