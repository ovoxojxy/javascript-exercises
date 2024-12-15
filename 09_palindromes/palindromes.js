const palindromes = function (str) {
    let i = 0;
    let j = str.length - 1;

    while (i <= j) {
        // Skip non-alphanumeric characters for both pointers
        while (i < j && /[.,:;!?'"\-()\s]/.test(str[i])) {
            i += 1;
        }
        while (i < j && /[.,:;!?'"\-()\s]/.test(str[j])) {
            j -= 1;
        }

        // Compare characters (case-insensitive)
        if (str[i].toLowerCase() !== str[j].toLowerCase()) {
            return false;
        }

        // Move pointers inward
        i += 1;
        j -= 1;
    }

    return true; // If all characters matched
};

// Do not edit below this line
module.exports = palindromes;
