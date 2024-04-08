function generate_random_numbers(amount, min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    var numbers = []
    for(i = amount; i > 0; i--) {
        numbers.push(Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled))
    }
    return numbers
}

function array_to_string(array, separator) {
    var out = ""
    for(i = 0; i < array.length; i++) {
        out += array[i]
        if(i != array.length - 1) {
            out += separator
        }
    }
    return out
}