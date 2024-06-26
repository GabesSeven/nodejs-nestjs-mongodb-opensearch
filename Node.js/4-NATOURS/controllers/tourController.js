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
exports.getAllTours = async (req, res) => {
    // console.log(req.requestTime);
    try {
        const tours = await Tour.find();
    
        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
            results: tours.length,
            data: {
                tours // tours: tours
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getTour = async (req, res) => {
    // console.log(req.params);
    // const id = req.params.id * 1; // convert to a number
    // const tour = tours.find(el => el.id === id); 
    try {
        const tour = await Tour.findById(req.params.id); // Tour.findOne({ _id: req.params.id })
    
        res.status(200).json({
            status: 'success',
            data: {
                tour // tours: tours
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createTour = async (req, res) => {
    try {
        // const newTour = new Tour({});
        // newTour.save();
    
        const newTour = await Tour.create(req.body);
        
        res.status(201).json({
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

exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); 
        res.status(200).json({
            status: 'success',
            data: {
                tour // tour: tour
            }
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id); 
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
