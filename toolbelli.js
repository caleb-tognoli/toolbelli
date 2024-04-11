function randi_range(min, max) { 
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

function generate_random_numbers(amount, min, max) {
    var numbers = []
    for(i = amount; i > 0; i--) {
        numbers.push(randi_range(min, max))
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


function get_string_UTC_date(date) {
    if(date == null)
        date = new Date()
    var date_string = ''
    date_string += date.getUTCFullYear() 
    date_string += '-' + (date.getUTCMonth()+1).toString().padStart(2, '0') 
    date_string += '-' + date.getUTCDate().toString().padStart(2, '0')
    return date_string
}

function get_string_UTC_time(date) {
    if(date == null)
        date = new Date()
    var time_string = ''
    time_string += date.getUTCHours().toString().padStart(2, '0') 
    time_string += ':' + date.getUTCMinutes().toString().padStart(2, '0')
    time_string += ':' + date.getUTCSeconds().toString().padStart(2, '0')
    return time_string
}

function get_string_UTC_timestamp(date) {
    if(date == null)
        date = new Date()
    return get_string_UTC_date(date) + " " + get_string_UTC_time(date)
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}