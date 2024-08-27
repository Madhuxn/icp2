// src/components/PromptGenerator.js
import React, { useState } from 'react';

// A predefined list of writing prompts
const prompts = [
  "Write about a time when you were incredibly surprised by something.",
  "Describe a place you would like to visit in detail.",
  "Write a story about a character who finds a mysterious object.",
  "Imagine a world where everyone can read each other's thoughts. Write a scene.",
  "Describe a significant event from your childhood and its impact on you.",
  "Write a letter to your future self.",
  "Write a story that begins with the sentence 'It was a dark and stormy night...'",
  "Imagine you could have any superpower. What would it be and how would you use it?",
  "Describe your ideal day from start to finish.",
  "Write a dialogue between two characters who have completely different views on an important issue."
];

const PromptGenerator = () => {
  const [prompt, setPrompt] = useState('');

  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setPrompt(prompts[randomIndex]);
  };

  return (
    <div className="prompt-generator">
      <button onClick={generatePrompt}>Generate Prompt</button>
      {prompt && <p className="prompt">{prompt}</p>}
    </div>
  );
};

export default PromptGenerator;
