# GPT Persona Bot Workshop
## Learning Goals:
- Develop skills in crafting robust, effective prompts.
- Understand the challenges of building distraction-resistant AI systems.
- Gain hands-on experience in testing and iterating AI behavior under adversarial conditions.


## Materials and Setup:
- Pre-configured GitHub repository for bot creation.
- Discord server with necessary permissions and channels.
- Docker setup guide or preloaded codespaces for an easy start.
- Example prompts and persona templates for inspiration.

## Overview:
Participants will design a chatbot that mimics a fictional character of their choosing, using prompt engineering to guide the bot in completing a specific task. However, a secret "distractor" will attempt to derail them. The goal is to teach participants how to craft resilient prompts and understand the importance of specificity in AI interactions.

## Workshop flow/Structure


### Introduction (10 minutes)
- Give overview
- Go over the goal: Create a chatbot that acts like you and completes a task.
- Go over the challenge: A secret distractor will try to get bots off task.
- Explain how prompt engineering ensures the bot stays focused despite distractions.
### Bot Creation (30 minutes)
- Task: Build a chatbot using the provided setup (Docker or GitHub Codespaces).
- Create the bot’s persona to reflect their own personality traits.
- Use the system prompt file to program the bot's behavior.
- Provide an example persona
### Task Assignment (10 minutes)
- Reveal the group task (building a system, solving a riddle, working through a problem, etc..)
- Bots must collaborate to achieve the task autonomously, guided only by prompts

~~### Distractor Role (Secretly Assigned)~~

~~- One participant per group will secretly play the distractor.~~

~~- Objective: Distract or mislead the bots by giving vague or off-topic inputs.~~

~~- Stay subtle to avoid being caught too early.~~

### Bot Collaboration and Testing (30 minutes)
Start Task
Observe how the bots respond to inputs
Take note of some of the good or bad that is happening
Discussion (20 minutes)
Everybody shares who they think the distractor was and why.
Distractor is revealed
Discuss:
What strategies worked to keep their bot focused?
How did the distractor succeed or fail?
The role of clear and specific prompts in guiding AI.
The importance of anticipating edge cases or unexpected inputs.



## Slides

---

### Chatbot Workshop 💬
Building and Testing Resilient AI Systems

---

### Objectives:
- Understand prompt engineering’s role in chatbot behavior.
- Set up and customize an AI chatbot in Discord.
- Build adversarial resilience through iterative refinement.
- Collaborate to evaluate and improve chatbot effectiveness.

---

### Introduce Workshop
Follow along and install our repo here!
https://applebaumian.github.io/chatbot-workshop/

---

### Let’s setup your chatbot! 🤖

This file controls your bot’s “Persona”.
- Change the prompt!
- Make sure GPT is listening.
- Break the bot!

---

### What is Prompt Engineering?

Crafting input prompts to guide AI behavior.
Key principles:
- Clarity and specificity.
- Examples.
- Constraints and guardrails.
- Tone and context.

---

### Why?
AI struggles with ambiguity, adversarial inputs, and staying on-task in dynamic contexts.

---

### 5 Prompt Engineering Techniques:
- Instruction clarity.
- Ask GPT for better prompts.
- Example-driven prompts.
- Constraints.
- Role Assignment
- Iterative Refinement

---

### Technique 1: Instruction Clarity
- Use direct and specific language to reduce ambiguity.
- Example: “Help me solve this math problem by explaining the steps to find the area of a triangle.” vs. “Help me solve this problem.”

---

### Technique 2: Example-Driven Prompts
- Prompts set clear expectations for response structure and style.
- Example: “Generate a joke in the format: [Setup] - [Punchline]. Here’s an example: Why don’t skeletons fight each other? - They don’t have the guts.”

---

### Technique 3: Constraints
- Set boundaries for what the bot can or cannot do.
- Example: “Generate a response in less than 50 words, avoiding technical jargon.”
- Tip: Constraints focus the bot’s behavior and ensure relevance.
- Example: “Explain recursion.” → “Explain recursion in 30 words or fewer for a beginner.”

---

### Technique 4: Role Assignment
- Persona influences tone and response style.
- Example: “You are a friendly teacher. Explain the Fibonacci sequence to a 10-year-old.”
- Tip: Use role assignment to simulate expertise or adjust the tone for your task.

---

### Technique 5: Iterative Refinement
- Test prompts iteratively to identify gaps or ambiguities.
- Example: Initial prompt: “Explain recursion.”
- Refined prompt: “Explain recursion as if I’m a beginner. Use a simple analogy, and limit your response to 50 words.”

---

### Let’s use these techniques on our bots!

---
