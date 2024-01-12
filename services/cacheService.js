//Used Redis for catching 
import Redis from 'redis';

const redisClient = Redis.createClient(6379);

//function to get result if already stored in cache 
const getFromCache = (key, callback) => {
    redisClient.get(key, (err, cachedResult) => {
        callback(err, cachedResult ? JSON.parse(cachedResult) : null);
    });
};

//function to put the result in the cache
const addToCache = (key, data) => {
    redisClient.set(key, JSON.stringify(data));
};

export { getFromCache, addToCache};