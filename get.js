function get(src, path){
    const keys = path.split('.')
    let current = src;

    for (let i of keys) {
        if (current.hasOwnProperty(i)){
            current = current[i];
        }else {
            return undefined;
        }
    }
    return current;
}