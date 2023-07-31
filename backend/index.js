const express = require('express');
const cors = require('cors');
// const cookieParser = require("cookie-parser");

const app = express();
const port = 5000;

const corsOptions ={
    origin:[process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials:true
}

const mongoDB = require('./db');
mongoDB();

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin", "https://hp-electronics.vercel.app");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })

app.use(express.json())
app.use(cors(corsOptions))
// app.use(cookieParser())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
