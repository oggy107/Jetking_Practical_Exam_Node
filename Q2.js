const isPalindrome = (ogString) => {
    return ogString.split('').reverse().join('') == ogString;
}

const main = () => {
    console.log("Is '212' palindrome:", isPalindrome("212"))
    console.log("Is '213' palindrome:", isPalindrome("213"))
    console.log("Is '7272727' palindrome:", isPalindrome("7272727"))
    console.log("Is '89' palindrome:", isPalindrome("89"))
}

main()