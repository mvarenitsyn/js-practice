function printerError(s) {
    let errors = s.match(/[^a-m]/g)
    return `${errors!==null ? errors.length : 0}/${s.length}`
}