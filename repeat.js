function repeat(s, n) {
    if (n === 0) {
        return ""
    }
    
    return s + repeat(s,n-1);
}