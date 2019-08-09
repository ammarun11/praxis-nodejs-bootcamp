//Fungsi 1 

const equal = (input) => {
    if (input == "good") {
        return "yes"
    } else {
        return "No"
    }
}
//Fungsi 2
const isNumber = (data) => {
    console.log(data)
    return typeof data != "number" ? false : true
}

//Fungsi 3

const compare = (input) => {
    let result
    let data_type = isNumber(input)

    if (data_type == true) {
        if (input > 2) {
            result = "success"
        } else if (input == 2) {
            result = "correct"
        } else {
            result = "fail"
        }
    } else {
        result = "Wrong Type"
    }
    return result
}

const day = (input) => {
    let result

    switch (input) {
        case 1:
            result = "Monday"
            break
        case 2:
            result = "Tuesday"
            break
        case 3:
            result = "Wednesday"
            break
        case 4:
            result = "Thursday"
            break
        case 5:
            result = "Friday"
            break
        case 6:
            result = "Saturday"
            break
        default:
            result = "Day not found"
    }

    return result
}

module.exports = {
    equal,
    compare,
    day
}