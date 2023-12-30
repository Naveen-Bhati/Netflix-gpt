import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.REACT_APP_GPT_API_KEY,
	dangerouslyAllowBrowser: true,
});

async function main() {
	const chatCompletion = await openai.chat.completions.create({
		messages: [
			{ role: "user", content: "5 funny bolywood movies of all time" },
		],
		model: "gpt-3.5-turbo",
	});
	console.log("Chat----", chatCompletion);
}
export default main;
