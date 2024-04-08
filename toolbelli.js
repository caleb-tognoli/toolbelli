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

function get_string_UTC_date() {
    var date = new Date()
    var date_string = ''
    date_string += date.getUTCFullYear() 
    date_string += '-' + (date.getUTCMonth()+1).toString().padStart(2, '0') 
    date_string += '-' + date.getUTCDate().toString().padStart(2, '0')
    return date_string
}

function get_string_UTC_time() {
    var date = new Date()
    var time_string = ''
    time_string += date.getUTCHours().toString().padStart(2, '0') 
    time_string += ':' + date.getUTCMinutes().toString().padStart(2, '0')
    time_string += ':' + date.getUTCSeconds().toString().padStart(2, '0')
    return time_string
}

function get_string_UTC_timestamp() {
    return get_string_UTC_date() + " " + get_string_UTC_time()
}