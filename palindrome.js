function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, ''); 
    // Hi World
    const length = cleanWord.length;
    
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (cleanWord[i] !== cleanWord[length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

// 20223
const wordsToTest = ["gag", "kayak", "php", "radar", "hello", "world"];
for (const word of wordsToTest) {
    console.log(`${word} is a palindrome: ${isPalindrome(word)}`);
}
