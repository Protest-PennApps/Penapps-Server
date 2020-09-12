const express = require('express')
const event = require('../controllers/event')
const image = require('../controllers/image')
var Multer = require('multer');
var upload = Multer({ dest: 'uploads/' });

const router = express.Router()

router.get("/", (req, res) => {
    res.send('Hello World!')
  })
router.post("/event/create", event.create_event);
router.post('/image/upload', image.upload);
router.get("/event/:event_name", event.get_event);
router.post("/event/addcomment", event.add_comment);

module.exports = router;