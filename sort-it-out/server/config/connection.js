const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/homeInventoryDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });

// module.exports = mongoose.connection

mongoose
    .connect('mongodb://localhost:27017/homeInventoryDB', {useNewUrlParser: true})
    .catch(e => {
        console.error('connection error', e.message)
    })

const db = mongoose.connection

module.exports = db;

