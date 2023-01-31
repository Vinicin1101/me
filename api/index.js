const app = require('express')();

const bodyParser = require('body-parser');
app.use(bodyParser.json())

const dotenv = require('dotenv').config();


const { MongoClient, ObjectId } = require('mongodb-legacy');

// database env
const DB = {
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    COLLECTION: {
        INFOS: process.env.INFOS,
        ALL_PJ: process.env.ALL_PJ,
        PJ: process.env.PJ

    },
}


// main function
async function main() {

    // Database connection
    const uri = `mongodb+srv://${DB.USER}:${DB.PASS}@cluster0.8382ra3.mongodb.net/?retryWrites=true&w=majority`
    const client = new MongoClient(uri);

    const db = client.db(DB.NAME)
    const collection_myInfos = db.collection(DB.COLLECTION.INFOS);
    const collection_projects = db.collection(DB.COLLECTION.ALL_PJ);
    const collection_project = db.collection(DB.COLLECTION.PJ);


    app.get('/my/infos', async (req, res) => {
        const infos = await collection_myInfos.find().toArray();

        res.json({ infos });
    });

    app.get('/my/projects', async (req, res) => {
        const projects = await collection_projects.find().toArray();

        res.json({ projects });
    });

    app.get('/my/project/', async (req, res) => {
        const project = await collection_project.find({ _id: ObjectId(req.query.pj) }).toArray();

        res.json({ project });
    });
}

main();

module.exports = app;