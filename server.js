const express = require("express")
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport")
const session = require("express-session")

dotenv.config({ path: './config/config.env' });

require("./config/passport")(passport)

const app = express();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}

connectDB();

// Body parser

app.use(express.json());

app.use(cors());

// session
app.use(
  session({
    secret: "mi secreto",
    resave: false,
    saveUninitialized: false
  })
)

// passport middleware

app.use(passport.initialize())
app.use(passport.session())


const users = require('./routes/users');
const auth = require('./routes/auth');
const confirm = require('./routes/confirm');
const resend = require('./routes/resend');
const verifyCode = require('./routes/verifyCode');
const forgot = require('./routes/forgot');
const reset = require('./routes/reset');
const newpost = require('./routes/newpost');


app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/confirm', confirm);
app.use('/api/resend', resend);
app.use('/api/verifyCode', verifyCode);
app.use('/api/forgot', forgot);
app.use('/api/reset', reset);
app.use('/api/newpost', newpost);


app.get("/", (req, res) => {
    res.json("welcome!")
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`server started at ${PORT}`))