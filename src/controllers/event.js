event_db = require('../db/db');

const create = async (req, res) => {
    const { event_name, event_description, date, time, address, city, zip_code } = req.body;

    const event = {
        event_name,
        event_description,
        date,
        time,
        address,
        city,
        zip_code
    }
    
    event_db.child(event_name).set(event)
    res.send('success');
}

module.exports = { create };