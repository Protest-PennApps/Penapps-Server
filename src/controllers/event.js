event_db = require('../db/db').events;

const create_event = async (req, res) => {
    console.log('events')

    try {
        const { event_name, event_description, date, time, address, city, zip_code, organizer} = req.body;
        console.log(event_name)

        const event = {
            event_name,
            event_description,
            date,
            time,
            address,
            city,
            zip_code,
            comments : Array(),
            event_active: true,
            organizer
        }
        
        await event_db.doc(event_name).set(event);

        res.status(200).send('ok');
    } catch (e) {
        console.log(e)
        res.status(404).send(e);
    }
    
}

const add_comment = async (req, res) => {
    
    const { event_name, comment } = req.body

    try {
        const event = await event_db.doc(event_name).get()

        updated_comments = event.data()['comments']
        
        updated_comments.push(comment)
        updated_event = await event_db.doc(event_name).update({'comments': updated_comments})

        res.status(200).send('ok')
    } catch (e) {
        console.log(e)
        res.status(404).send(e);
        return statuscodes[404]
    }    
}

const get_event = async ( req, res ) => {
    const { event_name } = req.params;

    try {
        const event = await event_db.doc(event_name).get()

        res.status(200).send('ok')
    } catch (e) {
        console.log(e)
        res.status(404).send(e);
        return statuscodes[404]
    }

}
module.exports = { create_event , add_comment, get_event };