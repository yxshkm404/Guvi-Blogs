//imports
const express = require('express');
const bodyParser = require('body-parser');
const path= require("path")
const app = express();
const userRouter = require('./routers/userRoutes');
const staticRouter = require('./routers/staticRouter');
const blogRouter = require('./routers/blogRoutes');

//configrations
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'))

//middlewares
app.use(express.static(path.resolve('./public')))
app.use(bodyParser.json());

// register routes
app.use('/', staticRouter);
app.use('/users', userRouter);
app.use('/blog', blogRouter);

//listener
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});