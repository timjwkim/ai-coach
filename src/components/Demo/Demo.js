import React from 'react';
import './Demo.css';
import { Configuration, OpenAIApi } from 'openai';
import { OPEN_AI_API_KEY } from '../Api/ApiKey.js';

const Demo = () => {
    const [input, setInput] = React.useState("");
    const [output, setOutput] = React.useState("loading output...");

    const configuration = new Configuration({
      apiKey: OPEN_AI_API_KEY
    });

    const openai = new OpenAIApi(configuration);

    const runOpenAi = async () => {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: input,
          max_tokens: 100
        });
        console.log(response);
        setOutput(response.data.choices[0].text);
    };

  return (
    <div className="Demo">
        <div className="Input">
            <textarea defaultValue={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <button onClick={runOpenAi}>Click Here</button>
            <div>
              {output}
            </div>
        </div>
    </div>
  );
}

export default Demo;
