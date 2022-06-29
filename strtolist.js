const uniqueInOrder=function(iterable){

    let list = [...iterable],
        result = []


    list.forEach((el, i) => {
        el !== list[i+1] && result.push(el)
    })
    console.log(result)
    return(result);
}

uniqueInOrder([1,2,2,3,3])