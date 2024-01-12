import express from 'express';
import dotenv from 'dotenv';
import connectDB from './configDB/db.js';
//Adding the document in the MongoDB database
import createPosts   from './controllers/postControllers.js';

//function to count  the words count and avg word length. 
import getAnalysis from './controllers/analysisController.js';

// middleware use for parsing the coming request
import bodyParser from 'body-parser';

//limiting the number of requests process by API
import rateLimit from 'express-rate-limit';

dotenv.config();
const port = process.env.PORT || 5000;
//Connection to Database
connectDB();


const app = express();
app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  });
app.use(limiter);

// POST /api/v1/posts/
app.post('/api/v1/posts/', createPosts);
// GET /api/v1/posts/:id/analysis/
app.get('/api/v1/posts/:id/analysis/', getAnalysis);


app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
