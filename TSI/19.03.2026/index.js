const isPalindrome = function(inputS) {
    const length = inputS.length;
    const s = inputS.replace(/[^a-zA-Z0-9а-яА-ЯёЁ]/g, "").toLowerCase();
    for(let i = 0; i < Math.floor(length/2); i++){
        console.log(s);
        if(s.charAt(i) !== s.charAt(length-i-1)) console.log(false);
    }
    console.log(true);
};

isPalindrome("A man, a plan, a canal: Panama");