const express = require("express");
const cors = require("cors");
const users = require('./routers/iniciar-S');
const register= require('./routers/registro');
const routes = require('./routers/routers');

const app = express();


app.use(express.json());

app.use(cors({origin: '*'})); 
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));

// // Routes//
// app.use('/api',users);
// app.use('/api',register);
// app.use('/api',routes);

let port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("JSON Server ejecutandose");
});