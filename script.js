function lengthOfLastWord(string) {
    let stringTrimmed = string.trim()
    let newString = stringTrimmed.split(' ')
    let lastWord = newString.length - 1
    return (newString[lastWord].length)
}

console.log(lengthOfLastWord('World'));
