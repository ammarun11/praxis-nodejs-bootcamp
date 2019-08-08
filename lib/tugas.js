//fungsi 1
const urutan = (data) => {
    let urutan

    urutan = data.sort()
    return urutan
}

const dibalik = (data) => {
    let dibalik
    dibalik = urutan(data)
    
    return dibalik.reverse();
}

module.exports = {
    urutan, //sama dengan manipulate : manipulate sama seperti line25
    dibalik
}
