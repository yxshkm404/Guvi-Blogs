//imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path")
const app = express();
const userRouter = require('./routers/userRoutes');
const staticRouter = require('./routers/staticRouter');
const blogRouter = require('./routers/blogRoutes');
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { checkForToken } = require('./middlewares/auth');

//database connection
mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

//configrations of ejs
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

//middlewares
app.use(express.static(path.resolve('./public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForToken);


// register routes
app.use('/', staticRouter);
app.use('/user', userRouter);
app.use('/blog', blogRouter);

//listener
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});