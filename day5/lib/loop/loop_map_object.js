const loop_map_object = (data) => {
    var text = ""
    console.log(`Before ${text}`)

    data.map((val, i) => {
        console.log(`Value of ${i} is ${val.name}`)

        text += `${val.name} | `
    })

    return text

}

module.exports = loop_map_object
