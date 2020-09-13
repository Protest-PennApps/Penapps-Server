image_db = require('../db/db').images;

const upload = async (req, res) => {
    const { name, image_url, description, geojson_url, event_name} = req.body
    
    const image = {
        name,
        image_url,
        description,
        event_name,
        geojson_url,
        is_valid : true
    }
    try {
        await image_db.doc(name).set(image);
        res.status(200).send('ok');
    } catch (e) {
        console.log(e)
        res.status(404).send(e);
    }

    
}

module.exports = { upload }