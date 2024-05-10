const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});
const app = require('./app');

mongoose
    .connect(process.env.DATABASE)
    .then(() => console.log('DB connection successful!'));

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// mongoose
//     // .connect(process.env.DATABASE_LOCAL)
//     .connect(DB)
//     .then(() => console.log('DB connection successful!'));

// mongoose
//     .connect(DB, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     })
//     .then(con => {
//         console.log(con.connections);
//         console.log('DB connection successful!');
//     });

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
    name: 'The Forest Hiker 5',
    rating: 4.7,
    price: 497
});

testTour
    .save()
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.log('ERROR 💥: ', err);
});

// console.log(process.env) /* Display all running environment variables */
// console.log(app.get('env'))
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});
