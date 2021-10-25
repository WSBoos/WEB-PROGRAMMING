function insertBySplice (input) {
    input.splice(3, 0, 3)
    return input
}

function removeBySplice (input) {
    input.splice(4, 1)
    return input
}

function replaceBySplice (input) {
    input.splice(4, 1, 4)
    return input
}

function findAverage(input) {
    return input.filter(value => typeof value === "number").reduce((total, value) => total + value)/input.length
}