import connectDB from "./configDB/db.js";
import dotenv from 'dotenv';
import texts from "./data/texts.js";
import Text from "./models/textModel.js";

dotenv.config();


await connectDB();

const importData = async () => {
    try {
        await Text.deleteMany();
        
        //const createdUsers = await Question.insertMany(questions);
        await Text.insertMany(texts);
        //console.log(createdUsers.JSON())
        console.log('Data Imported!');
        process.exit();
    }
    catch (error) {
        console.error(`${error}`);
        process.exit(1);
      }
};

importData();
