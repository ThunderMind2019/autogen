"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40],{97617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(85893),o=t(11151);const i={},r="LiteLLM with Ollama",l={id:"topics/non-openai-models/local-litellm-ollama",title:"LiteLLM with Ollama",description:"LiteLLM is an open-source locally run proxy server that provides an",source:"@site/docs/topics/non-openai-models/local-litellm-ollama.md",sourceDirName:"topics/non-openai-models",slug:"/topics/non-openai-models/local-litellm-ollama",permalink:"/autogen/docs/topics/non-openai-models/local-litellm-ollama",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/non-openai-models/local-litellm-ollama.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Together.AI",permalink:"/autogen/docs/topics/non-openai-models/cloud-togetherai"},next:{title:"LM Studio",permalink:"/autogen/docs/topics/non-openai-models/local-lm-studio"}},s={},c=[{value:"Installing LiteLLM",id:"installing-litellm",level:2},{value:"Installing Ollama",id:"installing-ollama",level:2},{value:"Downloading models",id:"downloading-models",level:2},{value:"Running LiteLLM proxy server",id:"running-litellm-proxy-server",level:2},{value:"Using LiteLLM+Ollama with AutoGen",id:"using-litellmollama-with-autogen",level:2},{value:"Example with Function Calling",id:"example-with-function-calling",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"litellm-with-ollama",children:"LiteLLM with Ollama"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://litellm.ai/",children:"LiteLLM"})," is an open-source locally run proxy server that provides an\nOpenAI-compatible API. It interfaces with a large number of providers that do the inference.\nTo handle the inference, a popular open-source inference engine is ",(0,a.jsx)(n.a,{href:"https://ollama.com/",children:"Ollama"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["As not all proxy servers support OpenAI's ",(0,a.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/function-calling",children:"Function Calling"})," (usable with AutoGen),\nLiteLLM together with Ollama enable this useful feature."]}),"\n",(0,a.jsx)(n.p,{children:"Running this stack requires the installation of:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["AutoGen (",(0,a.jsx)(n.a,{href:"/docs/installation",children:"installation instructions"}),")"]}),"\n",(0,a.jsx)(n.li,{children:"LiteLLM"}),"\n",(0,a.jsx)(n.li,{children:"Ollama"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Note: We recommend using a virtual environment for your stack, see ",(0,a.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/installation/#create-a-virtual-environment-optional",children:"this article"})," for guidance."]}),"\n",(0,a.jsx)(n.h2,{id:"installing-litellm",children:"Installing LiteLLM"}),"\n",(0,a.jsx)(n.p,{children:"Install LiteLLM with the proxy server functionality:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install 'litellm[proxy]'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note: If using Windows, run LiteLLM and Ollama within a ",(0,a.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"WSL2"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["For custom LiteLLM installation instructions, see their ",(0,a.jsx)(n.a,{href:"https://github.com/BerriAI/litellm",children:"GitHub repository"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"installing-ollama",children:"Installing Ollama"}),"\n",(0,a.jsxs)(n.p,{children:["For Mac and Windows, ",(0,a.jsx)(n.a,{href:"https://ollama.com/download",children:"download Ollama"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For Linux:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://ollama.com/install.sh | sh\n"})}),"\n",(0,a.jsx)(n.h2,{id:"downloading-models",children:"Downloading models"}),"\n",(0,a.jsxs)(n.p,{children:["Ollama has a library of models to choose from, see them ",(0,a.jsx)(n.a,{href:"https://ollama.com/library",children:"here"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Before you can use a model, you need to download it (using the name of the model from the library):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ollama pull llama2\n"})}),"\n",(0,a.jsx)(n.p,{children:"To view the models you have downloaded and can use:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ollama list\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Ollama enables the use of GGUF model files, available readily on Hugging Face. See Ollama`s ",(0,a.jsx)(n.a,{href:"https://github.com/ollama/ollama",children:"GitHub repository"}),"\nfor examples."]})}),"\n",(0,a.jsx)(n.h2,{id:"running-litellm-proxy-server",children:"Running LiteLLM proxy server"}),"\n",(0,a.jsx)(n.p,{children:"To run LiteLLM with the model you have downloaded, in your terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"litellm --model ollama_chat/llama2\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"INFO:     Started server process [19040]\nINFO:     Waiting for application startup.\n\n#------------------------------------------------------------#\n#                                                            #\n#       'This feature doesn't meet my needs because...'       #\n#        https://github.com/BerriAI/litellm/issues/new        #\n#                                                            #\n#------------------------------------------------------------#\n\n Thank you for using LiteLLM! - Krrish & Ishaan\n\n\n\nGive Feedback / Get Help: https://github.com/BerriAI/litellm/issues/new\n\n\nINFO:     Application startup complete.\nINFO:     Uvicorn running on http://0.0.0.0:4000 (Press CTRL+C to quit)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will run the proxy server and it will be available at '",(0,a.jsx)(n.a,{href:"http://0.0.0.0:4000/",children:"http://0.0.0.0:4000/"}),"'."]}),"\n",(0,a.jsx)(n.h2,{id:"using-litellmollama-with-autogen",children:"Using LiteLLM+Ollama with AutoGen"}),"\n",(0,a.jsx)(n.p,{children:"Now that we have the URL for the LiteLLM proxy server, you can use it within AutoGen\nin the same way as OpenAI or cloud-based proxy servers."}),"\n",(0,a.jsxs)(n.p,{children:["As you are running this proxy server locally, no API key is required. Additionally, as\nthe model is being set when running the\nLiteLLM command, no model name needs to be configured in AutoGen. However, ",(0,a.jsx)(n.code,{children:"model"}),"\nand ",(0,a.jsx)(n.code,{children:"api_key"})," are mandatory fields for configurations within AutoGen so we put dummy\nvalues in them, as per the example below."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from autogen import UserProxyAgent, ConversableAgent\n\nlocal_llm_config={\n    "config_list": [\n        {\n            "model": "NotRequired", # Loaded with LiteLLM command\n            "api_key": "NotRequired", # Not needed\n            "base_url": "http://0.0.0.0:4000"  # Your LiteLLM URL\n        }\n    ],\n    "cache_seed": None # Turns off caching, useful for testing different models\n}\n\n# Create the agent that uses the LLM.\nassistant = ConversableAgent("agent", llm_config=local_llm_config)\n\n# Create the agent that represents the user in the conversation.\nuser_proxy = UserProxyAgent("user", code_execution_config=False)\n\n# Let the assistant start the conversation.  It will end when the user types exit.\nassistant.initiate_chat(user_proxy, message="How can I help you today?")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"agent (to user):\n\nHow can I help you today?\n\n--------------------------------------------------------------------------------\nProvide feedback to agent. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: Tell me, why is the sky blue?\nuser (to agent):\n\nTell me, why is the sky blue?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nagent (to user):\n\nAh, a classic question! The sky appears blue because of a phenomenon called Rayleigh scattering. When sunlight enters Earth's atmosphere, it encounters tiny molecules of gases such as nitrogen and oxygen. These molecules scatter the light in all directions, but they scatter shorter (blue) wavelengths more than longer (red) wavelengths. This is why the sky looks blue during the daytime, especially in the direction of the sun.\n\nBut wait, there's more! The color of the sky can also change depending on the time of day and atmospheric conditions. For example, during sunrise and sunset, the sky can take on hues of red, orange, and pink due to the way that light interacts with the Earth's atmosphere. And if you're in a location with a lot of dust or pollution, the sky may appear more hazy or gray.\n\nSo there you have it! The sky is blue because of the way that light interacts with the Earth's atmosphere, and there are many factors that can affect its appearance. Is there anything else you'd like to know?\n\n--------------------------------------------------------------------------------\nProvide feedback to agent. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: And what would it take to make it red?\nuser (to agent):\n\nAnd what would it take to make it red?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nagent (to user):\n\nAh, an interesting question! To make the sky appear red, we need to look at the scattering of light in a different way. When the sun is low on the horizon, the light it emits has to travel through a longer distance in the atmosphere to reach our eyes. As a result, much of the shorter wavelength blue light is scattered away, leaving mainly the longer wavelength red and orange light to reach our eyes. This is why the sky can take on hues of red, orange, and pink during sunrise and sunset.\n\nHowever, if we were to somehow change the composition of the atmosphere or add some additional particles into the air, we could potentially make the sky appear red even when the sun is high in the sky. For example, if we were to add a lot of dust or smoke into the atmosphere, the sky might take on a reddish hue due to the scattering of light by these particles. Or, if we were to create a situation where the air was filled with a high concentration of certain gases, such as nitrogen oxides or sulfur compounds, the sky could potentially appear red or orange as a result of the way that these gases interact with light.\n\nSo there you have it! While the sky is typically blue during the daytime due to Rayleigh scattering, there are many other factors that can affect its appearance, and with the right conditions, we can even make the sky appear red! Is there anything else you'd like to know?\n\n--------------------------------------------------------------------------------\nProvide feedback to agent. Press enter to skip and use auto-reply, or type 'exit' to end the conversation: exit\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example-with-function-calling",children:"Example with Function Calling"}),"\n",(0,a.jsx)(n.p,{children:"Function calling (aka Tool calling) is a feature of OpenAI's API that AutoGen and LiteLLM support."}),"\n",(0,a.jsxs)(n.p,{children:["Below is an example of using function calling with LiteLLM and Ollama. Based on this ",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/501f8d22726e687c55052682c20c97ce62f018ac/notebook/agentchat_function_call_currency_calculator.ipynb",children:"currency conversion"})," notebook."]}),"\n",(0,a.jsx)(n.p,{children:"LiteLLM is loaded in the same way as the previous example, however the DolphinCoder model is used as it is better at constructing the\nfunction calling message required."}),"\n",(0,a.jsx)(n.p,{children:"In your terminal:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"litellm --model ollama_chat/dolphincoder\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import autogen\nfrom typing import Literal\nfrom typing_extensions import Annotated\n\nlocal_llm_config={\n    "config_list": [\n        {\n            "model": "NotRequired", # Loaded with LiteLLM command\n            "api_key": "NotRequired", # Not needed\n            "base_url": "http://0.0.0.0:4000"  # Your LiteLLM URL\n        }\n    ],\n    "cache_seed": None # Turns off caching, useful for testing different models\n}\n\n# Create the agent and include examples of the function calling JSON in the prompt\n# to help guide the model\nchatbot = autogen.AssistantAgent(\n    name="chatbot",\n    system_message="""For currency exchange tasks,\n        only use the functions you have been provided with.\n        Output \'TERMINATE\' when an answer has been provided.\n        Do not include the function name or result in the JSON.\n        Example of the return JSON is:\n        {\n            "parameter_1_name": 100.00,\n            "parameter_2_name": "ABC",\n            "parameter_3_name": "DEF",\n        }.\n        Another example of the return JSON is:\n        {\n            "parameter_1_name": "GHI",\n            "parameter_2_name": "ABC",\n            "parameter_3_name": "DEF",\n            "parameter_4_name": 123.00,\n        }. """,\n\n    llm_config=local_llm_config,\n)\n\nuser_proxy = autogen.UserProxyAgent(\n    name="user_proxy",\n    is_termination_msg=lambda x: x.get("content", "") and "TERMINATE" in x.get("content", ""),\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=1,\n)\n\n\nCurrencySymbol = Literal["USD", "EUR"]\n\n# Define our function that we expect to call\ndef exchange_rate(base_currency: CurrencySymbol, quote_currency: CurrencySymbol) -> float:\n    if base_currency == quote_currency:\n        return 1.0\n    elif base_currency == "USD" and quote_currency == "EUR":\n        return 1 / 1.1\n    elif base_currency == "EUR" and quote_currency == "USD":\n        return 1.1\n    else:\n        raise ValueError(f"Unknown currencies {base_currency}, {quote_currency}")\n\n# Register the function with the agent\n@user_proxy.register_for_execution()\n@chatbot.register_for_llm(description="Currency exchange calculator.")\ndef currency_calculator(\n    base_amount: Annotated[float, "Amount of currency in base_currency"],\n    base_currency: Annotated[CurrencySymbol, "Base currency"] = "USD",\n    quote_currency: Annotated[CurrencySymbol, "Quote currency"] = "EUR",\n) -> str:\n    quote_amount = exchange_rate(base_currency, quote_currency) * base_amount\n    return f"{format(quote_amount, \'.2f\')} {quote_currency}"\n\n# start the conversation\nres = user_proxy.initiate_chat(\n    chatbot,\n    message="How much is 123.45 EUR in USD?",\n    summary_method="reflection_with_llm",\n)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'user_proxy (to chatbot):\n\nHow much is 123.45 EUR in USD?\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n***** Suggested tool Call (call_c93c4390-93d5-4a28-b40d-09fe74cc58da): currency_calculator *****\nArguments:\n{\n  "base_amount": 123.45,\n  "base_currency": "EUR",\n  "quote_currency": "USD"\n}\n\n\n************************************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION currency_calculator...\nuser_proxy (to chatbot):\n\nuser_proxy (to chatbot):\n\n***** Response from calling tool "call_c93c4390-93d5-4a28-b40d-09fe74cc58da" *****\n135.80 USD\n**********************************************************************************\n\n--------------------------------------------------------------------------------\nchatbot (to user_proxy):\n\n***** Suggested tool Call (call_d8fd94de-5286-4ef6-b1f6-72c826531ff9): currency_calculator *****\nArguments:\n{\n  "base_amount": 123.45,\n  "base_currency": "EUR",\n  "quote_currency": "USD"\n}\n\n\n************************************************************************************************\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"Not all open source/weight models are suitable for function calling and AutoGen continues to be\ndeveloped to provide wider support for open source models."}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://discord.com/channels/1153072414184452236/1201369716057440287",children:"#alt-models"})," channel\non AutoGen's Discord is an active community discussing the use of open source/weight models\nwith AutoGen."]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);