import mongoose from 'mongoose';
//schema main points are that both id, text are required and id should be unique
const textSchema = mongoose.Schema(

    {
        id:{
            type: String,
            required: true,
            unique:true,
        },
        text:{
            type: String,
            required: true,
        }
        
    }, {
        timestamps:true,
    }
);

const Text = mongoose.model('Test',textSchema);
export default Text;