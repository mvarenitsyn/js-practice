function alphabetPosition(text) {
    let result = []
    for(i=9,a='';++i<36;) a+=i.toString(36)
    const sText = [...text].filter(el => el.match(/[a-z]/i))
    sText.map(el => result.push(a.indexOf(el.toLowerCase())+1))

    console.log(result)
    //for (let index in text) text[index].match(/[a-z]/)!==null && result.push(a.indexOf(text[index]))
    return result.join(" ").toString();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

console.log('A'.charCodeAt() - 64)