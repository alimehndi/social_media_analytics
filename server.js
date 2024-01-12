import express from 'express';
import dotenv from 'dotenv';
import connectDB from './configDB/db.js';

import createPosts   from './controllers/postControllers.js';
import getAnalysis from './controllers/analysisController.js';
import bodyParser from 'body-parser';

import rateLimit from 'express-rate-limit';


dotenv.config();

const port = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  });
  app.use(limiter);


// POST /posts
app.post('/api/v1/posts/', createPosts);

// GET /get/:id
app.get('/api/v1/posts/:id/analysis/', getAnalysis);


app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
