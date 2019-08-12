const delarray = (data) =>{
    let panjangString,firstname, lastname, all

    panjangString = data.length
    firstname = data[0]
    lastname = (data.length-1)

    let result = {
        panjangString,
        firstname,
        lastname
    }

    return result

}



module.exports = {
    delarray
}