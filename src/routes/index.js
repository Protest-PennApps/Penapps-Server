const router = require('express').Router()
const event = require('../controllers/event')

router.get('/event/create', event.create);

module.exports = router;