const retry = (count, callback) => {
    return async (...args) => {
        let attempts = 0;

        while (attempts <= count) {
            try {
                return await callback(...args);
            } catch (error) {
                attempts++;
                if (attempts > count) {
                    throw new Error(`Failed after ${attempts} attempts: ${error.message}`);
                }
            }
        }
    };
}
  
const timeout = (delay, callback) => {
    return async (...args) => {
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), delay)
        );

        try {
            return await Promise.race([callback(...args), timeoutPromise]);
        } catch (error) {
            throw new Error(`Operation timed out: ${error.message}`);
        }
    };
}