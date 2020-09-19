
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const favicon = require('express-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');
const developersRoutes = require('./developers/developers.routes');
const path = require('path');
const app = express();
// init db
db();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true })

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
// init routes
const router = express.Router();
// use express router
app.use('/api', router);
developersRoutes(router);
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/desarrolladores', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(app.get('port'), () => console.log('Server is runing on ', app.get('port')))