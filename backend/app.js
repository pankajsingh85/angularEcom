const express = require('express');
var cors = require('cors')
require('dotenv').config();
const db=require("./config/db.config.js");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.use('/uploads',express.static('uploads'));


// db.sequelize.sync({ force: true }).then(() => {
//      console.log("Drop and Resync with { force: true }");
// });

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
  });
 
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/userRoute');
const serviceRoutes = require('./routes/serviceAbilityRoute');
const adminRoutes=require('./routes/adminRoute');
app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/', serviceRoutes);
app.use('/',adminRoutes)


app.listen(port, () => console.log(`Listening on port ${port}`));