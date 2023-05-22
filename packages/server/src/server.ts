import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
import { bodySchema } from './schemas';
import { INITIAL_PROMPT, inlineCrimeCase } from './initialPrompt';

const app = express();
const port = 3000;

// Source .env file with typescript syntax
dotenv.config();

// Initialize OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_API_ORG,
});
const openai = new OpenAIApi(configuration);

// Parse json bodies
app.use(express.json());

app.get('/ping', (_, res) => {
  res.send('Server is alive and well!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.post('/interact', async (req, res) => {
  try {
    // Schema validation for request body
    // We get typing for free!
    const body = bodySchema.parse(req.body);

    // Create completion with body.prompt
    const { prompt, pastPrompts, crimeCase } = body;

    const initialPrompt = {
      ...INITIAL_PROMPT,
      content: INITIAL_PROMPT.content + inlineCrimeCase(crimeCase),
    };

    const completion = await openai.createChatCompletion(
      {
        model: 'gpt-3.5-turbo',
        messages: [
          initialPrompt,
          ...pastPrompts,
          { role: 'user', content: prompt },
        ],
      },
      { timeout: 10000 }
    );
    if (completion.data.choices[0].finish_reason !== 'stop') {
      throw new Error('Completion did not finish');
    }
    console.log(completion.data.choices[0].message?.content);
    return res.status(200).send(completion.data.choices[0].message?.content);
  } catch (e) {
    console.log(e);
    // Handle validation errors
    res.status(400).send(e);
    return;
  }
});
