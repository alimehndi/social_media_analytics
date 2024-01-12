import Text from '../models/textModel.js';

//function to find text of the particuler given id
const findTextById = async (textid) => {
     try {
        const text1 = await Text.findOne({ id: textid});
        return text1.text;
     }
     catch(error)
     {
        throw error;
     }
};

export default findTextById; 