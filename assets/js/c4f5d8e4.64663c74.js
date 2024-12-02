"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2634],{46062:(e,n,s)=>{s.d(n,{A:()=>r});s(96540);var i=s(74848);function r(e){function n(){return n=e.id?e.id:(n=(n=(n=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return(0,i.jsxs)("figure",{id:n(),align:e.align?e.align:"center",style:e.style?e.style:{},children:[e.children,e.src?(0,i.jsx)("img",{src:e.src,alt:e.alt}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"},children:e.caption}),(0,i.jsx)("figcaption",{align:e.align?e.align:"center",style:{},children:e.subcaption})]})}},2045:(e,n,s)=>{s.r(n),s.d(n,{default:()=>g});var i=s(96540),r=s(34164),t=s(68957),c=s(22777),l=s(31054),d=s(74848),o=s(28453);function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"what-is-prompt-engineering",children:"What is Prompt Engineering?"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Slides will be added soon!"}),"\n"]}),"\n",(0,d.jsx)(n.h1,{id:"chatgpt-discord-bot",children:"ChatGPT Discord Bot"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.h3,{id:"build-your-own-discord-bot-using-chatgpt",children:"Build your own Discord bot using ChatGPT"}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"[!IMPORTANT]"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Major Update (2024/03):"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"GPT-4 now supported for free"}),"\n",(0,d.jsxs)(n.li,{children:["Utilize OpenAI API can ensure smoother experiences, refer ",(0,d.jsx)(n.a,{href:"#optional-configuring-openai-api",children:"Optional: Configuring OpenAI API"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"chat",children:"Chat"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://user-images.githubusercontent.com/89479282/206497774-47d960cd-1aeb-4fba-9af5-1f9d6ff41f00.gif",alt:"image"})}),"\n",(0,d.jsx)(n.h1,{id:"setup",children:"Setup"}),"\n",(0,d.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"Python 3.9 or later"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsxs)(n.strong,{children:["Rename the file ",(0,d.jsx)(n.code,{children:".env.example"})," to ",(0,d.jsx)(n.code,{children:".env"})]})}),"\n",(0,d.jsxs)(n.li,{children:["Running ",(0,d.jsx)(n.code,{children:"pip3 install -r requirements.txt"})," to install the required dependencies"]}),"\n",(0,d.jsxs)(n.li,{children:["Google Chrome for ",(0,d.jsx)(n.a,{href:"https://github.com/Zero6992/chatGPT-discord-bot?tab=readme-ov-file#image-generation",children:"Image Generation"})]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"step-1-create-a-discord-bot",children:"Step 1: Create a Discord bot"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Go to ",(0,d.jsx)(n.a,{href:"https://discord.com/developers/applications",children:"https://discord.com/developers/applications"})," create an application"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Build a Discord bot under the application"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Get the token from bot setting"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://user-images.githubusercontent.com/89479282/205949161-4b508c6d-19a7-49b6-b8ed-7525ddbef430.png",alt:"image"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Store the token to ",(0,d.jsx)(n.code,{children:".env"})," under the ",(0,d.jsx)(n.code,{children:"DISCORD_BOT_TOKEN"})]}),"\n",(0,d.jsx)("img",{height:"190",width:"390",alt:"image",src:"https://user-images.githubusercontent.com/89479282/222661803-a7537ca7-88ae-4e66-9bec-384f3e83e6bd.png"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Turn MESSAGE CONTENT INTENT ",(0,d.jsx)(n.code,{children:"ON"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://user-images.githubusercontent.com/89479282/205949323-4354bd7d-9bb9-4f4b-a87e-deb9933a89b5.png",alt:"image"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Invite your bot to your server via OAuth2 URL Generator"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://user-images.githubusercontent.com/89479282/205949600-0c7ddb40-7e82-47a0-b59a-b089f929d177.png",alt:"image"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"step-2-run-the-bot-on-the-desktop",children:"Step 2: Run the bot on the desktop"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Open a terminal or command prompt"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Navigate to the directory where you installed the ChatGPT Discord bot"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Run ",(0,d.jsx)(n.code,{children:"python3 main.py"})," or ",(0,d.jsx)(n.code,{children:"python main.py"})," to run the bot"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"step-2-run-the-bot-with-docker",children:"Step 2: Run the bot with Docker"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Build the Docker image & run the Docker container with ",(0,d.jsx)(n.code,{children:"docker compose up -d"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Inspect whether the bot works well ",(0,d.jsx)(n.code,{children:"docker logs -t chatgpt-discord-bot"})]}),"\n",(0,d.jsx)(n.h3,{id:"stop-the-bot",children:"Stop the bot:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"docker ps"})," to see the list of running services"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"docker stop <BOT CONTAINER ID>"})," to stop the running bot"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"step-3-join-discord-to-interact-with-the-bot",children:"Step 3: Join Discord to interact with the bot"}),"\n",(0,d.jsxs)(n.p,{children:["Click this ",(0,d.jsx)(n.a,{href:"https://discord.gg/example-invite-link",children:"link"})," to join the Discord server and interact with the bot"]}),"\n",(0,d.jsx)(n.p,{children:"Or, scan the QR code below with your mobile device to join:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"Discord QR Code",src:s(59673).A+"",width:"250",height:"250"})}),"\n",(0,d.jsx)(n.h3,{id:"have-a-good-chat",children:"Have a good chat!"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"open-in-github-codespaces",children:"Open in GitHub Codespaces"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://github.com/codespaces/new?repo=ApplebaumIan/chatbot-workshop",children:(0,d.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20in-GitHub%20Codespaces-blue?logo=github&style=for-the-badge",alt:"Open in GitHub Codespaces"})})}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"optional-configuring-openai-api",children:"Optional: Configuring OpenAI API"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["Obtain your API key by visiting ",(0,d.jsx)(n.a,{href:"https://platform.openai.com/api-keys",children:"https://platform.openai.com/api-keys"})]}),"\n",(0,d.jsxs)(n.li,{children:["Paste the API key under ",(0,d.jsx)(n.code,{children:"OPENAI_KEY"})," in ",(0,d.jsx)(n.code,{children:".env"})]}),"\n",(0,d.jsxs)(n.li,{children:["Set ",(0,d.jsx)(n.code,{children:"OPENAI_ENABLED"})," to ",(0,d.jsx)(n.code,{children:"True"})," in ",(0,d.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"[!NOTE]\nGPT-4 API is subject to certain restrictions."}),"\n",(0,d.jsxs)(n.p,{children:["Details ",(0,d.jsx)(n.a,{href:"https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4",children:"https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4"})]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"image-generation",children:"Image Generation"}),"\n",(0,d.jsx)("img",{src:"https://i.imgur.com/Eo1ZzKk.png",width:"300",alt:"image"}),"\n",(0,d.jsx)(n.h3,{id:"microsoft-bing-image-generation",children:"Microsoft Bing Image Generation"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Go to ",(0,d.jsx)(n.a,{href:"https://www.bing.com/chat",children:"https://www.bing.com/chat"})," and log in"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Open console with ",(0,d.jsx)(n.code,{children:"F12"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Open ",(0,d.jsx)(n.code,{children:"Application"})," tab > Cookies"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Copy the value for ",(0,d.jsx)(n.code,{children:"_U"})," from cookies and paste it into ",(0,d.jsx)(n.code,{children:".env"})," under ",(0,d.jsx)(n.code,{children:"BING_COOKIE"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"google-gemini-image-generation",children:"Google Gemini Image Generation"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Go to ",(0,d.jsx)(n.a,{href:"https://gemini.google.com/app",children:"https://gemini.google.com/app"})," and log in"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Open console with ",(0,d.jsx)(n.code,{children:"F12"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Open ",(0,d.jsx)(n.code,{children:"Application"})," tab > Cookies"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Copy the value for ",(0,d.jsx)(n.code,{children:"__Secure-1PSID"})," from cookies and paste it into ",(0,d.jsx)(n.code,{children:".env"})," under ",(0,d.jsx)(n.code,{children:"GOOGLE_PSID"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"optional-setup-system-prompt",children:"Optional: Setup system prompt"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"A system prompt would be invoked when the bot is first started or reset"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["You can set it up by modifying the content in ",(0,d.jsx)(n.code,{children:"system_prompt.txt"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"All the text in the file will be fired as a prompt to the bot"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"Get the first message from ChatGPT in your discord channel!"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Go Discord setting turn ",(0,d.jsx)(n.code,{children:"developer mode"})," on"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Right-click the channel you want to recieve the message, ",(0,d.jsx)(n.code,{children:"Copy  ID"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://user-images.githubusercontent.com/89479282/207697217-e03357b3-3b3d-44d0-b880-163217ed4a49.PNG",alt:"channel-id"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["paste it into ",(0,d.jsx)(n.code,{children:".env"})," under ",(0,d.jsx)(n.code,{children:"DISCORD_CHANNEL_ID"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"optional-disable-logging",children:"Optional: Disable logging"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["Set the value of ",(0,d.jsx)(n.code,{children:"LOGGING"})," in the ",(0,d.jsx)(n.code,{children:".env"})," to False"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://zero6992.me/2023/03/08/chatGPT-discord-bot-chinese/",children:(0,d.jsx)(n.strong,{children:"\u4e2d\u6587\u8a2d\u7f6e\u6559\u5b78"})})}),"\n"]}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/chat [message]"})," Chat with ChatGPT/Gemini"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/draw [prompt]"})," Generate an image with Gemini/OpenAI/Bing"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/switchpersona [persona]"})," Switch between optional chatGPT jailbreaks"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"random"}),": Picks a random persona"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"standard"}),": Standard chatGPT mode"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"dan"}),": DAN 13.5 (Latest Working ChatGPT Jailbreak prompt)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Smart mode"}),": AIM (Always Intelligent and Machiavellian)"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Developer Mode"}),": software developer who specializes in the AI's area"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/private"})," ChatGPT switch to private mode"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/public"})," ChatGPT switch to public mode"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/replyall"})," ChatGPT switch between replyAll mode and default mode"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/reset"})," Clear ChatGPT conversation history"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/chat-model"})," Switch different chat model"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"gpt-4"}),": GPT-4 model"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"Gemini"}),": Google Gemini Model"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"special-features",children:"Special Features"}),"\n",(0,d.jsx)(n.h4,{id:"switch-persona",children:"Switch Persona"}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Warning"})}),"\n",(0,d.jsx)(n.p,{children:"Certain personas may generate vulgar or disturbing content. Use at your own risk."}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://user-images.githubusercontent.com/91911303/223772334-7aece61f-ead7-4119-bcd4-7274979c4702.png",alt:"image"})}),"\n",(0,d.jsx)(n.h4,{id:"mode",children:"Mode"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"public mode (default)"}),"  the bot directly reply on the channel"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://user-images.githubusercontent.com/89479282/206565977-d7c5d405-fdb4-4202-bbdd-715b7c8e8415.gif",alt:"image"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"private mode"})," the bot's reply can only be seen by the person who used the command"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"https://user-images.githubusercontent.com/89479282/206565873-b181e600-e793-4a94-a978-47f806b986da.gif",alt:"image"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"replyall mode"})," the bot will reply to all messages in the channel without using slash commands (",(0,d.jsx)(n.code,{children:"/chat"})," will also be unavailable)"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Warning"}),"\nThe bot will easily be triggered in ",(0,d.jsx)(n.code,{children:"replyall"})," mode, which could cause program failures"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.hr,{})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}function x(){return(0,d.jsx)("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"},children:(0,d.jsx)(a,{})})}const j={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var p=s(4307),A=s(46062);function u(){const{siteConfig:e}=(0,c.A)(),[n,s]=(0,i.useState)(!1);return(0,d.jsx)("header",{className:(0,r.A)("hero hero--primary",j.heroBanner),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{className:"hero__title",children:e.title}),(0,d.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,d.jsxs)("div",{className:j.buttons,children:[(0,d.jsx)(t.A,{to:"/#step-1-create-a-discord-bot",className:"button button--secondary button--lg",children:"Workshop - Get Started \ud83c\udfc1\ufe0f"}),(0,d.jsx)(t.A,{to:"https://github.com/codespaces/new?repo=ApplebaumIan/chatbot-workshop",className:"button button--secondary button--lg",children:"Codespace - Build your Bot \ud83e\udd16"}),(0,d.jsxs)("button",{onClick:()=>{s(!n)},className:"button button--secondary button--lg",children:[n?"\ud83d\udd3d  ":"\u25b6\ufe0f ","Follow Along - Slides \ud83d\udc68\u200d\ud83c\udfeb"]})]}),(0,d.jsxs)("details",{open:n,children:[(0,d.jsx)("summary",{style:{display:"none"}}),(0,d.jsx)(A.A,{caption:"What is Prompt Engineering?",subcaption:(0,d.jsx)("a",{href:"/chatbot-workshop/slides-html/Chatbot-Workshop/#2",target:"_blank",rel:"noopener noreferrer",children:"full screen click here"}),children:(0,d.jsx)("iframe",{height:"500",width:"100%",src:"/chatbot-workshop/slides-html/Chatbot-Workshop/#2",title:"W3Schools Free Online Web Tutorials"})})]})]})})}function g(){const{siteConfig:e}=(0,c.A)();return(0,d.jsxs)(l.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,d.jsx)(u,{}),(0,d.jsx)("main",{children:(0,d.jsx)(p.A,{children:(0,d.jsx)(x,{})})})]})}},4307:(e,n,s)=>{s.d(n,{A:()=>t});s(96540);var i=s(92180),r=s(74848);function t(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.A,{...e})})}},77392:(e,n,s)=>{s.d(n,{A:()=>c});var i=s(96540),r=s(46062),t=s(93552);const c={React:i,...i,Figure:r.A,dinosaur:t.A}},93552:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAT3UlEQVR42u1dCVQVV5pWXNt2N0czykl33KImZ7IgKgqIghq3KCDK+qowCek2c2K0Mx3idBxakzYxJnZiq3Gf6Bg7UdN2R51MxnTSia3gew9Rwccm7oqiiIK4sPxTt1hEHo9XvPVW1fed852Dr+67UNb/1f3/+9/731atAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8i2CxGjDUJXzMGmcSZnmoHAF7B6GMJvYPNwq5gk1AmMS/YJMbaahtkNsRLbeghmoU4d7cDAO+NCEbhQCMjrZbe5q81bhdyVOwuXbtqZdDSZ+yau9oBgNcgGeIvmzDQJkUy1ix8ZKMtsWvuagcAXsNYs/iyLSNlIgk2GebLQjKJQ6R/32+mbcWYI8KTrm6HJwR4170yCV80Y6T1I4kklH122lFNG9e2wxMC3Ao/U1KnQLPgF2SK/xeri5TiIxlikX1DBXVANpoXSy/DzGCjYfdYs2FRiFkcxWxEu/GF0RAm3fT1Bv8JJyV+LLlV08ccnNuFCQeGAdrheWkkXxaSGueruZFDurlrzfn4QSbDGRgAqJD3JK4NMcU8oo3RIz1hOB4q6AZeCzKK0aoXCIs58DBBt9Esfip5Ke3UPkN1Eg8TdB8N+5grr+JRxPAJHiLoTgaZhf97MiuqvVqTgNPxEEEPcK0qBTIyNa6rnWw1CLooJjHMUZc6KMWnNs9xDg8Q9ACLQtMMvbhfeFi7tuoLZMhBz1NczaUw2H4OFizhAYFe5l0uM+61m53wgMAWM+C7aBr425Ey2c8umPpdxmO+oxQPWz8cvnOmTGf7Gf1DDHXs25lYxMrIfmafOdnvOe4WONZsk4XhaD7nkJpAPQN96w2a/cw+c7S/QYsC6vuq46D/CHD+7zQaRvDmYsXVbG6CEWmZQ5YGWRk0+8zR/phb1bg/9pkLgvVk/twso+EViETbfPw1PyuDHrDQ36n4o6GL1eHRn7skDhlrEnZyuvbKMN/TIglKM9AzmyfLbzL2sBjZz89sniJfg2G7Nvbwad+m3qB9OrQh/z0RTschzK1yXZAu8zi/CxQ9NJL4fT6d+kwdQG27drB6q9WxXbcO1GfaAPL78wswcBfx6Y2T6ZHxv5DJfuY1acj5Kl55JHHPtOCBaOozZQC18mltUxhWlNoyobjwDQVyng/hVhyBaYbBrEKhW0aNL2Y85LO2lB37daHhX86AAemAPC4z6R5sEt9j6nWXONr8vJ3D4qhj287tIRIIxMP7PmrKd151p1vV3MjRtmt7eiT0F+QbN4z6xQ6T/eO2XdrbbP8z3y5wtyAQT+VAxAh336wcczQVhPfsKM+ANJWsYp+xRFS7Hh2b/C6LSWBIEIgnsuh73T1b1VRA3ql/dxq5d5bd74/4OlJu21TgjtktCMT9uwbdFJDXjx5TBzQ5cigRR71I/hZJ7bpbTwf3mT4QxgSBuHtbrSHcnUlAlstwxXqdgcmjmsyTIJkIgag2SGcZ8qYCckcWyAUdTpBnsBr398yWKTAoCESd07xD3rFeHMdmqxztj81uNe5v6B+CYVAQiAeD9qPiIOkP/NIVN9l//nArg/ZNeNLh/nzjn7Tqr//rw2FQEIg6M+lN7RcY/LvR3PQHupdh6S9R+LH5ZMh8i17NfoeS81bSO6fX0cfn/ps2X/wL7bzyv/TNtYP0z5KjdLw0hwrKL1DR/Rt0r+q+Plys0d/HyMtDGib4nNlx5ur+QPcZuLPQTSa9bjk0oyuM2dX9adm4Zx57jeIzk+lXliX0Ru4KSjm1hlac/S/69MKXtP3yXvrr1b/Td8WplHbzOGWV5dPZO5fo+v0Slxi4ZgTiiUw66BoD/32BPQO/zI2Ba0cgbs6kg9aMPfFbWn5mM/258H80a+CaEYi7M+ngA7JR4ERpHgFqEogbM+lgDSelv0LfFx+B1SNIBxtzWsarlH27ABavZoF4YsOUHhliEuX4AlCOwsJC2rVrF7+JwjHGuU8Em4X9MHDn+afzOzRtzGVlZbR69WqKjY2lqKgoev/996m4uNihvqqrqyklJYU6dKhf3Kq/Pel6izuKK246bYQXLlygvXv30ldffUWZmZlO9cX6CAwMpI4dO1Lbtm3pueeeo61btzrUV1ZWFj3++ONWKxseffRRMpvNLe7vzTffrClF5ONDEydOhIuldb53ZqNTxpyfn08RERFWBsiM2mQytbi/+fPn29zCnJSU1KK+ioqKyNe3poTpU089RRs3bqTt27dTQEBAvUiuXr2quL8ff/xRFgYT7e7duxGk64E/FBsdFsfhw4epR48eNTsvO3WioKAgmjRpEvXu3Vv+rHPnzvTTTz8p7u/dd9+tqXwouS/Lly+nS5cuUUlJCa1fv17ui11j7pFSTJs2Tf4O+7tu3bpV//ndu3fr3v40Y8YMRX1VVFTQkCFD5O8sW7YMmXS98MLdQofEYbFYqFu3brLBsBGEBa11KC0tpcTERPkaa8NGGXs4ePCg/HZu06YN7du3z+r6/v3769/e6enpdvvbs2dPTeHrnj1l968xLl68SN2712yR/vbbb+3299lnn8ltn3jiCbp37x4y6XphedWdFouDBbiDBw+WDWb27NlUWVlp1aaqqooiIyPlNsOHD3/IqBrj9u3bNGjQILnt4sWLbbZbuHCh3Mbf37/J31kH9rvq+mPBuS2w0Yi18fPzk4NvW2C/iwmDtd22bRsy6RAINWvM48aNq48z2L9tgblH/fv3l9suWLDAZrt58+bJbZ5++ulmhcRGpscee8yu4a9YsUJuM2zYMNk1soXy8nLq16+f3Hbnzp0227EJAtZm4MCBVv0hkw4XS8aNGzdkV4S9bZmxMMM6f/683e+lpaVR+/Y1W5A//PBDq+vr1q2Tr7E2GRkZil2nrl27Um5ubpOTBuwaa/PNN9/Y7a/u97MRgsUmjcE+Y8JgbbZs2YJMut6oZGnJ6NGjHz5bQzKYggLlWXf2BmbxA/suC+LZbNKOHTsoLi6OWrduLXPz5s2K+2P5DNYXC5rz8h6sGbt8+bI8qrFrrI3S4JuNNOw7ycnJVtfffvvtZkcjTPNqnMtOb7BrRGPGjJFnlpiRfPDBB826VbbABNGrVy/rii/t2tGqVata7OY9++yz8ve7dOkiC41NAdfNng0dOlR2x5TCaDTKfwf77tKlS2UhsJiEuXFs0oCJ+9ChQ+pYauKOPel65sT0JJckCpXmJVhgzLLZM2fOpEWLFj00ArR0oqCp/AuLj9hI0lIwkbKRrG7mqy42YVyyZIl61mJhqYnruercdtUuI2HTzZs2baK1a9fSkSPOrURm8U1droOxb9++tGHDBixWxGJFkVJLjmEFYoMcCYuxmpsBQ5Cuu+Xu8+hk2SmoQ63L3ZFJ90w8cuD6YVi9KgWCTLrHuDB3uVwep5qqoQC1CASZdM8z+sQb9P6ZTbSjcD+KNnAvEGTSUfYHAkGQDoGhcBymeUGUHkUmHdS6wG5VlmFPOgjq/gAdEMQRbCCoZYEgkw5CIMikgxAIMukgBIJMOgiBIEgHIRBM84KgegSCTDoIgSCTzvcWXbNAv7bE0/oL0fSPG1F0+k4k3aoMp4rqmUSkL8LFAus563gCbb88h4ruR+hOCKoQCIJ07/CFDAP9rWg23a+GILgVCDLp3uGSghi6WREOMXAvEGTSPcrxUpzxtTRqQAQqEQgCck9WNzFQasksCEBVAkEm3WMjB8SBIB20QbhVmOYFbXBpQazLDYjlR25XhetGIJOyXuw5JntuF2TSNVd61EAlLpytqpa4sjCWJmSLMtdcidG2QKhV67CcxHVh2WJVLVcik65zjmVZ9QyRxmcKFHpSJMkoaGqOSHGnDPTGuXj53w1pLIvSnECk+yoPzRZPh2Un/r3x/YZZEifBxdLrcpOMB6JQyt3Fc7QokOb4OoJ0vdEs0LgTLRNGHQ/cnE07JZEcLo2SXTCtC2RCdmJ8aI64MNSSOI25YMik64COiqMxPy6M0cMI0oDCGmTSdeBWuUIcYbWBe6kGZrdacM/VIafF7sikazggb2nMYU8gJZURehJIVUhO0iPIpGt29HCdOBj/qDMXS3ohfIogXctLUDJd516xaeCvb8yhMv24WGekQP2VsFNJ3TDNq1G60r2qY4IkFLWLpIX3fMojIkEm3QsV0LMFlwuEcfS/P0N+ft29ypdf/qWnBEJhFiEJmXQIRDH7RQ2uP5fcW+zbt6PHBDIhJ/EluFhwsRRxzsl4OmgeTyZTiFdZXDzVUwLJd6uLhSBdO0H63huzdRWkM9fKreJAJl07SULGjy7H6iuTbhHXI5Ou8URhGBKFHCcKEZB7fxQ5iqUm/C41QSadk8WKrhHJJ4X6crFCLeKfkEnXiavl7HL31LJZutgPUrfcPSxXmIoNU3rcMGURsGGKpw1TyKTzKZTxmWJtnkT6OSOBxhyYRX6fPW9lML0C+3k9KdgUR47s4dSWW4kF3Gy5RSbdtXTUMEaM6NG84bVuRUNSAiThSCNNlkCDk/25FAfjqFE9XVO0IVtcW1uwoTLMInyEsj86FohSllaGU7mOyv5MPR7bIyRrXmcUjoNAQFR3h0BAVHeHQEBUdwchEFR3ByEQVHdHkA6BQCCY5oVAIBBk0tUrEH//Htwm/jyZSedWIMikc55JVxFdkkmHiwWBgAjSIRAQmXQQAkEmHYRAkEkHeRDIP0ujaOG5eJqWK8j8jfQzOyQHAkEmXfcC2XA12uaOuk1F0RAIgnRtC4Qd4XyifBZZ7kRaHefMRg5722wbjySsD9YX61MLx0OH5cwNnJwX1xXTvDoTyF3JeD8pjKHncx4Y+xTp51VXYuRrrM3CJk6ybUx22u2D/mLlPuquTc4RavqrVv2e9LthOcKqgPNRP0MmXQcCqZAMdsFZ28b/unTNf1QvGpceZ1cg48xx5NPOh4Z/PsVmG79tz1Prtj5q3ZPekD/4mZLaIZOu9dpXx+1XKBl3XFlFk9BMAw1+a4Tddo8Zhqkyk95EQbz5cLG0Xsk9S3TLUQfN8ddnErRS9seMIF3rZ4FYPC+QF3IFrQjkFjLpOAvE5UwsMGhFIBZk0rV+FsgJweMC+Vilp95a34uwBpl0rdffNXtWIKzS+9Hbs2hlYSwZThnkqWA2onx+LZr7KeDGFdxDsw3jwnIS18mnSWWLd9iIEmpJfMvtU8DIpHtwBMny/Ahii/8mBe88JxRb8BJIc3tCEUG6Nt0re/zgcozqBVLrfm3GNK+aC1Ef408cjBM5Po2qhfdS6dZTppBJd2/cEWoRuRQIY8/RfdWQSbfP3LlhSoPuxSGpcb7IpMO1UsIe/n1UkUm3OxrmCsF2jTs09aU+0kO5zQwcLhYHTBe5Fgdb1HirMlwLLtbdSVkv9lSS01ha93CCzMpP4UGQzve5g+7iHzk+z7CF97JWadIvr8EDqmJZcmTSvUSzd5aWKOX8swn1y+tVLpCD001JnezHHkdE/yYe1B17IkEm3U3BeTq/o8faK9Hy0nvVn3JrET5SvAxeeii/sfGwqqSY5DVk0j3sXh3jd/Rgm7V43+Ou8F7uSyyT+P1EizjdnkC+sDPk7x+TPrcvMukemr3K5DtA532PuyP3EZojvtvc9G6mggd3LcgoLAg49PD6FQTp7li5K6hGIE3tcVejQGSRWBKn2RpBLrXgAbK2vws0zu2PaV7t7P1whnV73NUuEHZstC2B3HFwtuVIkEn8cKxRiJFGkn8NyZgbGGw07IaROzmCZKtLIGyPu6oz6fY2VkkP5R4MEwJxlCGmOG4y6ferw525l5u2BHIdhsmRQOBiOUy2gNLhGCRb/M6ZIB3U8PZaZ5haNosbgRTcjXT8XnKFqbZGkK9gmDxtjlKPOLZwNs37j1uzHbwXYWlzOwMXwTCRKFSaKJyeK8huFU8jh5K6xNaJQqGUuVU2R476aVqzOAqGiaUmSnjmXiTXy0xePZOgLN7ISxymfL06pfhID+YcjJMTgXAah7xymu9CclfuR8jFJhTcy1EHSvgYlsE41VVq1NPccX0O1wJhFVcU3UuOmNzyfeWpcb7Ih/C1YYqnfAirsnijkt8l7iz/EZ1vUJQMnJif0NvRQnBrYZw8bZriRyDbrvE9euwpnqOs1E+OsNjhogsBh17sKT2YIhgnLxunRC7WZc3OF6ic4w1SN6WRLTJP0ehxOSRrXmfn6lwZxWgYJ8r+NKywmMbhdG5DLrkYp+ReqsbnGCa7qij1pzBOVDdh3HqN7zMN/3pjttLA/D9dVt8q6suoNmNNwl9gnPreRPV76c1czbE4WKJyUo6il8euFErxcWkROD9TUqdgk2EfjJOf3IgnRfLepViqrOY37mCbtKbmKhLH1pDvU9q6pVIi29SOmS19zWxNqC3MUM25W6Vg5KhmhRlaUavWHjgoxzAHs1scBe4ZclUOl4sjJt9AxrIoboVRUhmuNCA/F2ZJnOTRs0BC0wy9gk3iamyr5ad2lquCd1alZM2VGG6PNGBJQJbnCM+ze7+sSslKr56RPj7D0K92WQrWbnEiFLYsxZG1W2zEYMszeC0herUiQv77FGTIz7EDcRSVEPUYKMUnyGgYIY0qyVIAuVN6WMdrdyZiuYqXgvixRwX5KOjxmTWLHdnORLZchfnrEdLb9+XTCZKLEiv78GfvRXA0QsykmxXhlF8eST8UR9G6i9H0q7x4Cm10H2HZQoUkhmsSj0/IFnZOyBFeDctNGNoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsI3/BxVeQNnL1kBuAAAAAElFTkSuQmCC"},59673:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQMAAACyIsh+AAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABcUlEQVRoge3YMZLCMAwFUGVSbMkROApHc46Wo+QIlBTMCvt/2bC7EGy2/S4yk/jRCEuybfZuJOe48tUXs8mXY3zNrwIBVkwcruZrfvAHy/GCr5PACDjkL5gzmzE38eF+EfgIYOW6b1/fZgL/AXY652inzV7+FwL7oKW/Z1CSH6F+Vh8EdkH0niikNf3jq0A/eBgnb8CeDoE9wFCjBpRFy/WaSjXFQ6AbGFo6Mr+omvmYExgBiQHGHDu8x+9yqFkfBLoA5mK9WjkERQ2FmgT6AdI/11AMHoJy5nvtSwINcFN+np37ScTPHwupQC+wuYaaAGec8hrpL9ALmN1Z1XP3vUROAoOAxTJ25h4jLoQEOsF9OJYvz92sASYwAFIENu6Cajf61bMEOsCKgPIuaG5Jz74kMAR+3E+20Jf09+j+AqOAfcniapJK4CNQpttdUPp7qS6wC2r6tw2nR4ffnl0FC7wEkewt/TeLDWddtAJ94N24Aad+FU4syXhHAAAAAElFTkSuQmCC"}}]);