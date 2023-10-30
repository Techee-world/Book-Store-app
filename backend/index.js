import express from 'express'
import { PORT, MONGODB_CONNECTION } from "./config.js";
import  mongoose from "mongoose";
import route from './route/bookRoute.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
// second option ................

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST','DELETE','PUT'],
//     allowedHeaders:['Content-Type']
// }))

app.get("/", (req, res) => {
  console.log(req);
  return res.status(404).send("This is my MERN stack project");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/books',route)

// mongoose
//   .connect(MONGODB_CONNECTION)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error(err.massage);
//   });

mongoose
  .connect(MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 1000, 
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log(`successfully connected`);
  })
  .catch((e) => {
    console.log(`not connected`);
  });
