function get(src, path){
    const keys = path.split('.')
    let current = src;

    

    for (let key of keys) {
        if (current === null || current === undefined) {
            return undefined;
        }
        if (Array.isArray(current) && !isNaN(key) && Number.isInteger(Number(key))) {
            current = current[parseInt(key,10)]
        } else {
            current = current[key];
        }
    }
    return current;
}