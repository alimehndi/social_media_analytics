//Not necessary in the project but i used to make simple 

import connectDB from "./configDB/db.js";
import dotenv from 'dotenv';
import texts from "./data/texts.js";
import Text from "./models/textModel.js";
//configure the variable in .env file
dotenv.config();

//used to connect to MongoDB database
await connectDB();


const importData = async () => {
    try {
        await Text.deleteMany();        
        await Text.insertMany(texts);
        console.log('Data Imported!');
        process.exit();
    }
    catch (error) {
        console.error(`${error}`);
        process.exit(1);
      }
};
//run the given funtions
importData();
