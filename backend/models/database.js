const mongoose = require('mongoose');
const MONGO_URL = '';
mongoose.set('useCreateIndex', true);
const connectDB = async () => {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
        .then(() => console.log('MongoDB connected!'))
        .catch(err => console.log(err));

};
module.exports = connectDB;