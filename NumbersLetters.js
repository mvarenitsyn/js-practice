function numbersOfLetters(integer) {
    words = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const result = []
    let word = integer.toString().split("").map(el => el=words[el]).join("")
    result.push(word)
    while(word!==words[word.length]){
        word = word.length.toString().split("").map(el => el=words[el]).join("")
        result.push(word)
    }
    return result
}

numbersOfLetters(695)