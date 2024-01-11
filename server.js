import express from 'express';
import dotenv from 'dotenv';
import connectDB from './configDB/db.js';

import createPosts   from './controllers/postControllers.js';
import getAnalysis from './controllers/analysisController.js';

import bodyParser from 'body-parser';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
connectDB();


// POST /api/v1/posts
app.post('/posts', createPosts);

// GET /api/v1/posts/:id/analysis
app.get('/get/:id', getAnalysis);





/*app.get('/', (req, res) => {
    res.send('API is running....');
});
*/
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
