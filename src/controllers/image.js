event_db = require('../db/db').images;
var Busboy = require('busboy');


const upload = async (req, res) => {
    console.log('Image')
    console.log(req.file)
    res.send('ok');
    return;
}

module.exports = { upload }