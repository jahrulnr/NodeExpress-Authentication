const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const apiRouter = require('./routes/api');
const webRouter = require('./routes/web');

const app = express();
dotenv.config();

app.use(express.json);
const port = Number(process.env.PORT || 3331);
app.use('/api', apiRouter);
app.use('/', webRouter);
app.options('*', cors());

app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
