function words(s){
    return s.split(' ');
}

function sentence(arr) {
    return arr.split(' ').join(' ');
}

function yell(s){
    return s.toUpperCase();
}

function whisper(s) {
    return '*' + s.toLowerCase() + '*';
}

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}