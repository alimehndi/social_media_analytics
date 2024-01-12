import Redis from 'redis';

const redisClient = Redis.createClient(6379);

const getFromCache = (key, callback) => {
    redisClient.get(key, (err, cachedResult) => {
        callback(err, cachedResult ? JSON.parse(cachedResult) : null);
    });
};

const addToCache = (key, data) => {
    redisClient.set(key, JSON.stringify(data));
};

export { getFromCache, addToCache};