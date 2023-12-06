import openai from "openai";
async function generateImages(prompt) {
  try {
    const response = await openai.Completion.create({
      engine: "davinci",
      prompt: prompt,
      max_tokens: 100, // Adjust as needed
    });

    // Extract and return the generated images from the response
    const images = response.choices[0].text.split("\n");
    return images;
  } catch (error) {
    console.error("Error generating images:", error);
    throw error;
  }
}

module.exports = {
  generateImages,
};
