function digital_root(n) {
    if(n.toString().length === 1) return n
    n = [...n.toString().split("")].map(el => el=+el).reduce((sum,val) => sum += val)
    return digital_root(n)
}

console.log(digital_root(6755))