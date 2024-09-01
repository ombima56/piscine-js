function findIP(dataSet) {
    // Regular expression to match valid IP addresses with optional port numbers
    const ipPattern = /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(:([0-5]?[0-9]{1,4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?\b/g;
    
    const matches = dataSet.match(ipPattern) || [];
    
    return matches;
}

const dataSet = "Here are some IPs: 192.168.1.1, 10.0.0.1:80, and 256.100.50.0. Check this IP: 123.45.67.89:65535 and this one: 192.168.0.0:99999";
const validIPs = findIP(dataSet);
console.log(validIPs);
