const cezar = (s, key) => {
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let wynik = "";

    for (let i = 0; i < s.length; i++) {
        const index = alfabet.indexOf(s[i]);

        if (index === -1) {
            wynik += s[i];
            continue;
        }

        const nowyIndex = (index + key + 26) % 26;
        wynik += alfabet[nowyIndex];
    }

    return wynik;
};

console.log(cezar("TKTVAGHYHUBT", -3));
console.log(cezar("WNWYDKKBKXEW", -3));
