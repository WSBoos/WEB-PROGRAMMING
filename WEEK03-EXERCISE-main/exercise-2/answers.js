function convertADtoBE(input) {
    if (input >= 0)
        return "8.ศ. " + (input - 543)
    else
        return "ไม่ถูกต้อง"
}

function evenOrOdd(input) {
    if (input % 2 == 0)
        return "even"
    else
        return "odd"
}

function getFullName(input) {
    if (input.sex === "male")
        return "Mr. " + input.firstName + " " + input.lastName
    else
        return "Ms. " + input.firstName + " " + input.lastName
}

function getFirstName(input) {
    return input.substring(input.indexOf(" ")+1)
}

function splitName(input) {
    input = "Mr Aariz Bennett"
    return {
            "sex": input.substring(0, input.indexOf(" ")),
            "firstName": input.substring(input.indexOf(" ")+1, input.indexOf(" ", input.indexOf(" ")+1)),
            "lastName": input.substring(input.indexOf(" ", input.indexOf(" ")+1)+1)
          }

}