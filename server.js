require('dotenv').config();
const path = require("path")

// const port = process.env.PORT_NUMBER || 3000;

const server = app.listen(process.env.PORT || 3001, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
  });

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const app = express();
app.use(express.json())
app.use(cookieSession({
    name:"app-session",
    secret:process.env.COOKIE_KEY,
    httpOnly: true
}))
app.use(express.static(path.join(__dirname, "client","build")))

mongoose.connect(process.env.DB_URL)
    .then((result) => app.listen(port))
    .catch((err) => console.error(err))



const journeyRouter = require('./routes/journey')
app.use('/journey', journeyRouter)

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)


const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function(){
    console.log(`server connected to ${port}`);
})