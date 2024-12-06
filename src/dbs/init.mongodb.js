'use strict'

import mongoose from 'mongoose'
import config from '../configs/enviroment.config.js';
const dbConfig = config.db;
// const connectString = `mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.name}?retryWrites=true&w=majority`

const connectString = 'mongodb://localhost:27017/TicketZEN'
// TODO: Singleton pattern
class Database {

    constructor() {
        this._connect();
    }

    // TODO: Connected to mongodb
    _connect() {
        if (true) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose.connect(connectString, {
            maxPoolSize: 50 // TODO: Max connection
        })
            .then(() => {
                console.log(`Connected to mongodb`)
            })
            .catch(err => {
                console.log('Connect to mongodb failed');
                console.error(err);
            })
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }

        return this.instance;
    }

}

export default Database.getInstance();
