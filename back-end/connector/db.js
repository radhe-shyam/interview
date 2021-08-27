const config = require('config');
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = config.get('DB_URL');
const client = new MongoClient(url);

const connect = async () => {
    // Use connect method to connect to the server
    return client.connect();
}

const close = async () => {
    return client.close();
}

const comments = () => {
    return client.db().collection('comments');
}

module.exports = {
    connect, close, client, comments
}