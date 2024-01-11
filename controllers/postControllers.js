import Text from '../models/textModel.js';

const createPosts = async (req, res) => {
    const payloadArray = req.body;
    if (!payloadArray || !Array.isArray(payloadArray)) {
        return res.status(400).json({ error: 'Invalid payload format' });
    }

    try {
        const texts = [];

        for (const payload of payloadArray) {
            const { id, text } = payload;

            if (!id || !text) {
                return res.status(400).json({ error: 'Each payload must contain id and text' });
            }
            const newText = new Text({ id, text });
            texts.push(newText);
        }

        await Text.insertMany(texts);

        return res.status(201).json({ message: 'Texts successfully stored' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default createPosts;




// import Text from '../models/textModel.js';


// const createPost = async (req,res) => {
    
  
//     const {id,text} = req.body;
//     console.log(id);
//     console.log(text);
//     if(!id || !text )
//     {
//         return res.status(400).json({error: 'invalid payload'});
//     }

//     try{

//         const text1 = new Text({id,text});
//         await text1.save();

//         return res.status(201).json({message: 'Text successfully stored'});
//     } catch(error)
//     {
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
//  };

//  export default createPost;