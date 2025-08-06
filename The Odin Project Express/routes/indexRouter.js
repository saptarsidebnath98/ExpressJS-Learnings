const {Router} = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send('This is Homepage.')
})

indexRouter.get('/about', (req, res) => {
     res.send('This is About page.')
})

indexRouter.get('/contact', (req, res) => {
     res.send('This is Contact page.')
})

module.exports = indexRouter;