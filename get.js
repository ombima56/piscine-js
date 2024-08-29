function get(src, path){
    const keys = path.split('.')
    let current = src;

    for (let key of keys) {
        if (current.hasOwnProperty(key)){
            if (Array.isArray(current) && !isNaN(key) && Number.isInteger(Number(key))) {
                current = current[parseInt(key,10)]
            } else {
                current = current[key];
            }
            
        } else {
            return undefined;
        }
    }

    return current;
}