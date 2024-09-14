const retry = (count, callback) => {
    return async (...args) => {
      for (let attempts = 0; attempts <= count; attempts++) {
        try {
          return await callback(...args);
        } catch (error) {
          if (attempts === count) {
            throw error;
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
            throw error;
        }
    };
}