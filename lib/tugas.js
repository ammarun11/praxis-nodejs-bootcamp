//fungsi 1
const urutan = (data) => {
    let panjangString, urutan

    panjangString = data.length
    urutan = data.sort()

    let result = {
        panjangString,
        urutan
    }
    return result
}

const dibalik = (data) => {
    let panjangString, dibalik

    panjangString = data.length
    dibalik = data.reverse()

    let result = {
        panjangString,
        dibalik
    }
    return result
}

module.exports = {
    urutan, //sama dengan manipulate : manipulate sama seperti line25
    dibalik
}
