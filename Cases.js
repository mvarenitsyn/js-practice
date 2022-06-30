function changeCase(identifier, targetCase){

    const caseRules = {
        snake: '_',
        camel: '',
        kebab: '-'
    }
    const sChar = [];
    let rStr = ''

    rStr = identifier.replace(/([A-Z]|[^aA-zZ]|_)/g, el => {
        if(/[A-Z]/.test(el) && (sChar[0]==='char' || sChar[0]===undefined)) {
            sChar.unshift('char')

            return ' '+el
        }
        else if(/[^a-z]/.test(el) && sChar[1]===el && sChar[0]==='schar' || sChar[0]===undefined) {

            sChar.unshift(el)
            sChar.unshift('schar')

            return ' '
        }

    })
    //console.log(sChar)
    if(rStr==='') return ''
    if(/undefined/.test(rStr) || !caseRules.hasOwnProperty(targetCase)) return undefined

    rStr = rStr.toLowerCase().replace(/\s\w/g, el => {
        if(targetCase==='camel') el = el.toUpperCase()
        return caseRules[targetCase]+el.trim()
    })

    return rStr


}
console.log(changeCase("map-toAll", "kebab"))


