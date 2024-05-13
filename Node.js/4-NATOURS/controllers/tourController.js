// const fs = require('fs');
const Tour = require('./../models/tourModel');

// /* Local File Database */
// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

/* Middlewares */
// exports.checkID = (req, res, next, val) => {
//     console.log(`Tour id is: ${val}`);
//     if(req.params.id * 1 > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     next();
// };

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        });
    }
    next();
};

/* Route Handlers */
exports.getAllTours = (req, res) => {
    // console.log(req.requestTime);
    res.status(200).json({
        status: 'success',
        // results: tours.length,
        // data: {
        //     tours // tours: tours
        // }
    });
};

exports.getTour = (req, res) => {
    // console.log(req.params);
    const id = req.params.id * 1; // convert to a number
    
    // const tour = tours.find(el => el.id === id); 
    
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour // tour: tour
    //     }
    // });
};

exports.createTour = async (req, res) => {
    try {
        // const newTour = new Tour({});
        // newTour.save();
    
        const newTour = await Tour.create(req.body);
        
        res.status(200).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            // message: err
            message: 'Invalid data sent!'
        });
    }
};

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        // data: {
        //     tour: '<Update tour here...>'
        // }
    });
};

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};
