class MongooseToObjectFunctions {
    multipleMongooseToObject = (mongooses) => {
        return mongooses.map(mongoose => mongoose.toObject());
    };
    mongooseToObject = (mongoose) => {
        return mongoose ? mongoose.toObject() : mongoose;
    };
}


export default new MongooseToObjectFunctions()