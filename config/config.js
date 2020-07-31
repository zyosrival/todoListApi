module.exports = {
    DB: process.env.HOST ? process.env.HOST : 'mongodb://admin:Qwerty99_@learnit-sandbox-shard-00-00-xwfyd.mongodb.net:27017,learnit-sandbox-shard-00-01-xwfyd.mongodb.net:27017,learnit-sandbox-shard-00-02-xwfyd.mongodb.net:27017/learnit-react?replicaSet=learnIT-sandbox-shard-0&ssl=true&authSource=admin',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
};