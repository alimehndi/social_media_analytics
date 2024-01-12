function analyzeText(inputString) {    
    // Remove leading and trailing whitespaces
    const trimmedString = inputString.trim();
    
    // Split the string into words
    const words = trimmedString.split(/\s+/);
  
    // Calculate the number of words
    const wordCount = words.length;
  
    // Calculate the total length of all words
    const totalWordLength = words.reduce((sum, word) => sum + word.length, 0);
  
    // Calculate the average word length
    const averageWordLength = wordCount === 0 ? 0 : totalWordLength / wordCount;
  
    // Return the result as an object
    return {
      wordCount,
      averageWordLength,
    };
  }
export default analyzeText;