const functions = require("firebase-functions");
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: "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"
});

exports.chatbot = functions.https.onCall(async (data, context) => {
    const userMessage = data.message;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userMessage }]
        });

        return { reply: response.choices[0].message.content };
    } catch (error) {
        return { reply: "Sorry, something went wrong." };
    }
});
