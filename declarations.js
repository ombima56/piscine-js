const escapeStr = '`\\/"\''
const arr = [4, '2']
const obj = {
    str : 'string',
    num : 8,
    bool: false,
    undef: undefined,
}
const nested = {
    arr : [4, undefined, '2'],
    obj : {
        str: 'string',
        num : 9,
        bool: false,
    }
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested.arr)
Object.freeze(nested.obj)