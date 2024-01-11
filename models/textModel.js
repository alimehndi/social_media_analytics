import mongoose from 'mongoose';

const textSchema = mongoose.Schema(

    {
        id:{
            type: String,
            required: true,
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