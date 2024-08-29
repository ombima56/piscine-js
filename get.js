function get(src, path) {
    if (path === '') return src;
    const keys = path.split('.');
    let current = src;
    for (const key of keys) {
        if (current == null) return undefined;
        if (Array.isArray(current)) {
            const index = parseInt(key, 10);
            if (isNaN(index) || index < 0 || index >= current.length) return undefined;
            current = current[index];
        } else if (typeof current === 'object') {
            if (!Object.prototype.hasOwnProperty.call(current, key)) return undefined;
            current = current[key];
        } else {
            return undefined;
        }
    }
    return typeof current === 'function' ? current.call(src) : current;
}