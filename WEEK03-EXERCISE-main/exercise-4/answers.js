function mapToSquare (input) {
    return input.map(value => Math.pow(value, 2))
}

function convertTemperature (input) {
    input.map((value, index, array) => {
        value.temperature = fah_to_celsius(value.temperature)
    });
    return input

    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
}

function filterEvenNumber (input) {
    return input.filter(value => value % 2 === 0)
}

function filterAgeRange (input) {
    return (input.people).filter(element => input.max > element.age && element.age > input.min);
}

function removeByFilter (input) {
    return (input.people).filter(value => value.id !== input.removeId)
    // return (input.people).filter(value => value.name !== "")
}