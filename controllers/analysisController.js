import findTextById from "../services/databaseService.js";
import analyzeText from "../services/analyzeService.js";


const getAnalysis =  async (req, res) => {
    const textId = req.params.id;
    try {
        const text1 = await findTextById(textId);
        if(!text1 ){
            return res.status(404).json({ error : 'Post not found'});
        }
        const textContent = text1;
        const analysisResult = analyzeText(textContent);
        return res.status(200).json(analysisResult);
    }
    catch(error)
    {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default getAnalysis;