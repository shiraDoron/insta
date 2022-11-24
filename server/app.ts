import express from 'express'
import connect from './src/utils/connect'
import routes from './src/routes'
import dotenv from "dotenv"

const app = express()

dotenv.config();

const port = process.env.SERVER_PORT
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.listen(port, async () => {
    await connect();
    routes(app)
});