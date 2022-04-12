const dynamoose = require('dynamoose');
const express = require('express');

require('dotenv').config();

const app = express();
app.use(express.json());

let AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
let AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
let AWS_REGION = process.AWS_REGION;

dynamoose.aws.sdk.config.update({
   accessKeyId: AWS_ACCESS_KEY_ID,
   secretAccessKey: AWS_SECRET_ACCESS_KEY,
   region: AWS_REGION 
});

var modelSchema = require('./model.js');
app.use('/', require('./routes.js'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));


