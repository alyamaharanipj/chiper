const chiper = (word, num) => {
    const alpha = [
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ]

    let newWord = ''
    for(let i = 0; i < word.length; i++){
        if(word[i].match(/^[A-Z]+$/i)){
            let index = alpha.findIndex( el => el === word[i].toLowerCase())
            let newIndex = index + num
            if(newIndex >= 26){
                newWord += alpha[newIndex - 26]
            } else newWord += alpha[newIndex]
        } else newWord += word[i]
    }
    console.log(newWord)
}

chiper('hello worldz',3)