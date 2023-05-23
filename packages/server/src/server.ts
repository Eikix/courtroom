import express from "express";
import dotenv from "dotenv";
import { bodySchema } from "./schemas";
import { INITIAL_PROMPT, inlineCrimeCase } from "./initialPrompt";
import cors from "cors";
// import { Configuration, OpenAIApi } from "openai";

const app = express();
const port = 8080;

// Source .env file with typescript syntax
dotenv.config();

// Initialize OpenAI API
const apiKey = process.env.OPENAI_API_KEY;
const organization = process.env.OPENAI_API_ORG;
const url = "https://api.openai.com/v1/chat/completions";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${apiKey}`,
  "OpenAI-Organization": organization ?? "",
};

// Started by using the openai npm package but it seemed to bug quite a bit. Using the above fetch method instead.
// ****
// ****
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
//   organization: process.env.OPENAI_API_ORG,
// });
// const openai = new OpenAIApi(configuration);

// Parse json bodies
app.use(express.json());
app.use(cors());

app.get("/ping", (_, res) => {
  res.send("Server is alive and well!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post("/interact", async (req, res) => {
  try {
    // Schema validation for request body
    // We get typing for free!
    const body = bodySchema.parse(req.body);

    console.log(body);

    // Create completion with body.prompt
    const { prompt, pastPrompts, crimeCase } = body;

    const initialPrompt = {
      role: INITIAL_PROMPT.role,
      content: INITIAL_PROMPT.content + inlineCrimeCase(crimeCase),
    };

    const messages = [
      initialPrompt,
      ...pastPrompts,
      { role: "user", content: prompt },
    ];

    const data = {
      model: "gpt-3.5-turbo",
      messages,
    };

    console.log(messages);

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);

    console.log(response);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const completion = await response.json();

    console.log(completion.choices[0].message?.content);

    // Started by using the openai npm package but it seemed to bug quite a bit. Using the above fetch method instead.
    // *****
    // *****
    // const completion = await openai.createChatCompletion(
    //   {
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //       // initialPrompt,
    //       // ...pastPrompts,
    //       { role: "user", content: "Say Hello back please" },
    //     ],
    //   },
    //   { timeout: 10000 },
    // );
    // if (completion.data.choices[0].finish_reason !== "stop") {
    //   throw new Error("Completion did not finish");
    // }
    // console.log(completion.data.choices[0].message?.content);
    //
    // *****
    // *****

    const responsePayload = {
      content: completion.choices[0].message?.content,
      role: "assistant",
    };

    return res.status(200).send(JSON.stringify(responsePayload));
  } catch (e) {
    console.log(e);
    // Handle validation errors
    res.status(400).send(e);
    return;
  }
});
