const { Router } = require('express')
const router = Router();

// get all users

router.get('/', (req, res) => {
    return res.json([{
            name: 'john doe',
            id: '1',
        },
        {
            name: 'anna boe',
            id: '2',
        }
    ])
});

// get specific user

router.get('/new', (req, res) => {
    return res.json('welcome to the new page')
        // if (req.params.id === 'U0001') {
        //     return res.json('User U0001 found')
        // };
        // return res.status(404).json('User not found')
});

// add user

router.post('/', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        return res.status(201).json('User created');
    };
    return res.status(400).json('user not created')
});

module.exports = router