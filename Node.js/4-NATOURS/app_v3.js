const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const { stringify } = require('querystring');

/* Middlewares */
const app = express();

// app.use(morgan('tiny'));
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');    
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();    
    next();
});

/* Local File Database */
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

/* Views or Route Handlers */
const getAllTours = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours // tours: tours
        }
    });
}

const getTour = (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1; // convert to a number
    const tour = tours.find(el => el.id === id);

    // if(id > tours.length) {
    if(!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            tour // tour: tour
        }
    });
}

const createTour = (req, res) => {
    // console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,  
        JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour
                }        
            });
        }
    );
}

const updateTour = (req, res) => {
    if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Update tour here...>'
        }
    });
}

const deleteTour = (req, res) => {
    if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    
    res.status(204).json({
        status: 'success',
        data: null
    });
}

const getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    })
};  

const getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    })
};  

const createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    })
};  

const updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    })
};  

const deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    })
};  

/* Routes */
/* FIRST WAY */
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

/* SECOND WAY */
const tourRouter = express.Router()
const userRouter = express.Router()

tourRouter
    .route('/')
    .get(getAllTours)
    .post(createTour);

tourRouter
    .route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);

userRouter
    .route('/')
    .get(getAllUsers)
    .post(createUser);

userRouter
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

/* Start Server */
const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
});

