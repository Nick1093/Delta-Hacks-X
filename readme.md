# coTA

🐒👀 Monkey see Monkey Learn 🙉🧠 -- scroll and absorb lectures! 📚

# How To Use

Be sure to have `Node.js` installed to run React framework

1. `cd client`
2. `npm i`
3. `npm start`

In a new terminal

1. `cd server`
2. `source myenv/bin/activate` (whatever OS you are the python venv matters)
3. `uvicorn main:app`

Enjoy 😀

## 💡 Inspiration

Do you spend hours on social media platforms? Have you noticed the addictive nature of short-form videos? Have you ever found yourself remembering random facts or content from these videos? Do you ever get lost in those subway surfer, minecraft, or some satisfying video and come out learning about random useless information or fictional stories from Reddit?

Let’s replace that irrelevant content with material you need to study or learn. Check out coTA! coTA is a new spin on silly computer generated content where you can be entertained while learning and retaining information from your lecture slides.

## 🤔 What it does

We take traditional lectures and make them engaging. Our tool ingests PowerPoint presentations, comprehends the content, and creates entertaining short-form videos to help you learn about lecture material. This satisfies a user’s need for entertainment while staying productive and learning about educational content. Instead of robot-generated fictional Reddit post readers, our tool will teach you about the educational content from your PowerPoint presentations in an easy-to-understand manner.

We also have a chatting feature where you can chat with cohere's LLM to better understand more about power point with direct context. The chatting feature also helps users to clarify any questions that they have with the power of `cohere's` web-search `connector` that is powered by google search!

## 🛠️ How we built it

The Stack: `FastAPI`, `React`, `CoHereAPI`,`TailwindCSS`

For our front end, we used React, creating a minimalist and intuitive design so that any user can easily use our app.

For our backend, we used Python. We utilized a Python library called `pptx Presentation` to convert PowerPoint presentations into strings to extract lecture content. We then used `Cohere’s` RAG model with the `command-nightly` model to read in and vectorize the document. This prepares for querying to extract information directly from the PowerPoint. This ensures that any questions that come directly from the PowerPoint content will not be made up and will teach you content within the scope of the class and PowerPoint. This content can then be added to our videos so that users will have relevant and correct information about what they are learning. When generating content, we used web sockets to sequentially generate content for the videos so that users do not have to wait a long time for all the slides to be processed and can start learning right away.

When creating the video, we used `JavaScript’s` built-in API called `Speech Synthesis` to read out loud the content. We displayed the text by parsing and manipulating the strings so that it would fit nicely in the video frame. We also added video footage to be played in the background to keep users engaged and entertained. We tinted the videos to keep users intrigued while listening to the content. This ultimately leads to an easy and fun way to help students retain information and learn more about educational content.

For each video, we made it possible for users to chat to learn more about the content in case they have further questions and can clarify if they don’t understand the content well. This is also done using `Cohere's` API to gain relevant context and up to date info from Google Search

## 🏔️ Challenges we ran into

One of the biggest issues we encountered was the inconsistency of the `cochat` endpoint in returning similar outputs. Initially, we prompted the LLM to parse out key ideas from the PowerPoints and return them as an array. However, the LLM sometimes struggled with matching quotations or consistently returning an array-formatted output. When we switched our models to use `Cohere’s` `command-nightly`, we noticed faster and better results. However, another issue we noticed is that if we overload a prompt, the LLM will have further issues following the strict return formatting, despite clear prompting.

Another significant issue was that parsing through our PowerPoints could take quite some time because our PowerPoints were too large. We managed to fix this by splicing the PowerPoints into sections, making it bite-sized for the model to quickly parse and generate content. However, this is a bottleneck at the moment because we can’t generate content as quickly as platforms like TikTok or YouTube, where it’s just a pre-made video. In the future, we plan to add a feature where users must watch at least 5 seconds so that we can keep users focused instead of being entertained by the scroll effect.

As always, another challenge was integrating the backend with the frontend. Both the backend and frontend worked flawlessly separately, but we had some issues when connecting the endpoints. It would behave differently than what we were expecting, functions were called multiple times due to a glitch in `React’s` framework, and `POST` parameters were not being sent through properly.

Regarding git commits, we accidentally overwrote some code because we miscommunicated on our git pushes. So, we will be sure to communicate when we are pushing and pulling, and of course, regularly pull from the main branch.

## ⭐ Accomplishments that we're proud of

We centered the divs on our first try 😎

We successfully used `Cohere’s` RAG model, which was much easier than we expected. We thought we would need a vector database and langchain, but instead, it was just some really simple, easy calls to the API to help us parse and generate our backend.

We are also really proud of our video feature. It’s really cool to see how we were able to replicate the smooth scrolling effect and text overlay, which is completely done in our frontend in React. Our short-video displayer looks as great as YouTube, TikTok, and Instagram!

## 🧠 What we learned

We gained a wealth of knowledge about RAG from the workshops at Deltahacks, facilitated by Bell ai, and from the Cohere API demo with Raymond. We discovered how straightforward it was to use RAG with Cohere’s API. RAG is an impressive technology that not only provides up-to-date information but also offers relevant internal data that we can easily access for our everyday LLMs.

## 🔮 What's next for coTA

One feature we’re excited to add is quizzes to ensure that users are actively engaged. Quizzes would serve as a tool to reinforce the learning experience for users.

We’re also looking forward to optimizing our system by reusing a vectorized document instead of having to refeed the API. This could save a significant amount of time and resources, and potentially speed up content generation. One approach we’re considering is exploring Langchain to see if they offer any support for this, as they do have conversational support! We’re eager to delve into this outside the scope of this hackathon and learn more about the incredible technologies that Cohere can provide.

In terms of background videos, we’re planning to expand beyond the pool of videos we currently have. Our existing videos align more with meme trends, but we’re interested in exploring a more professional route where relevant videos could play in the background. This could potentially be achieved with AI video generators, but for now, we can only hope for a near future where easily accessible video AI becomes a reality.

We’re considering implementing a bottleneck scrolling feature so that users will have to watch at least a portion of the video before skipping.

Lastly, we plan to utilize more AI features such as stable defusion or an image library to bring up relevant images for topics.
