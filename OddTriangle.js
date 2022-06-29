function rowSumOddNumbers(n) {
    let res = 0,
        prev = 1
    if(n===0) return 0
    if(n===1) return 1
    for(let i=2; i<=n; i++) {
        for(let j=0; j<i; j++) {
            prev += 2

            if(i===n) {
                console.log(prev)
                res += prev
            }
            }
        }

    console.log(res)
    return res
}

rowSumOddNumbers(2)

