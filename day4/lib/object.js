//fungsi 1
const manipulate = (data) => {
    let firstname, all

    firstname = data.firstname
    all = data

    let result = {
        firstname,
        all
    }
    return result
}
//fungsi 2
const merge = function(data, input) {
    return data.concat(input)
}
//fungsi 3
const insert = (data, input) => {
    data.push(input)
}

module.exports = {
    manipulate, //sama dengan manipulate : manipulate sama seperti line25
    merge: merge,
    add: insert
}

/* 
Ecma Script 
Use Arrow Functions

*/