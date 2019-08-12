module.exports = (data) => {
    let text = ""
    console.log(`before ${data}`)

    let loop = data.forEach((value, index) => {
        text += ` Value Now of ${index} is ${value} | ` 
    });
    console.log(`After ${text}`)

    let result = {
        loop,
        text
    }
    return result
}