function findIP(dataSet) {
    // Regular expression to match valid IP addresses with optional ports
    const pattern = /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(:[1-9][0-9]{0,4})?\b/g;
    
    // Match all occurrences in the dataSet
    const matches = dataSet.match(pattern) || [];
    
    // Further filter to ensure valid port range (1-65535) if a port is present
    return matches.filter(ip => {
        const parts = ip.split(':');
        if (parts.length === 2) {
            const port = parseInt(parts[1], 10);
            return port >= 1 && port <= 65535;
        }
        return true;
    });
}


// const dataSet = "Here are some IPs: 192.168.1.1, 10.0.0.1:80, and 256.100.50.0. Check this IP: 123.45.67.89:65535 and this one: 192.168.0.0:99999";
// const validIPs = findIP(dataSet);
// console.log(validIPs);
