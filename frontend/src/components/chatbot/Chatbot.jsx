// import React, { useState } from 'react';
// import Chatbot from 'react-chatbot-kit';
// import axios from 'axios';
// import 'react-chatbot-kit/build/main.css';

// // Configuring the chatbot
// const config = {
//   botName: 'SupportBot',
//   initialMessages: [
//     {
//       text: 'Hello! How can I assist you today?',
//       id: 1,
//     },
//   ],
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: '#376B7E',
//     },
//     chatButton: {
//       backgroundColor: '#5ccc9d',
//     },
//   },
// };

// // Action provider
// class ActionProvider {
//   constructor(createChatBotMessage, setStateFunc) {
//     this.createChatBotMessage = createChatBotMessage;
//     this.setState = setStateFunc;
//   }

//   sendMessageToAPI(message) {
//     // Your custom prompt
//     const prompt = `This is an e-notarization application with jurisdiction in India. We enable online connectivity of notary officers\
//     with their clients, thereby increasing accessibility, more income, ease of use. The notaries are stored over IPFS with their\
//     transactions stored over blockchain to provide immutable ledgers and this AI chatbot for convenience. Hence it is a completely\
//     secure and one of a kind product. You are an AI assistant responsible for answering user queries regarding this app.\
//     Steps to be followed by any client are (1) download suitable notary template (2) fill it and upload (3) choose suitable time slot\
//     join online meet and get notarized.\
//     Steps to be followed by notaries are (1) enter their empty time slots (2) join and notarize assigned notaries. (3) all of their\
//     records and ledgers are automatically generated, hence no need to do anything else.\
//     Do not answer any irrelevant question.\
//     User Query: ${message}`;

//     axios
//       .post('http://localhost:5000/api/chat', { prompt })  // Call to backend API
//       .then((response) => {
//         const botMessage = this.createChatBotMessage(response.data.text);
//         this.updateChatbotState(botMessage);
//       })
//       .catch((error) => {
//         const botMessage = this.createChatBotMessage('Sorry, I encountered an error.');
//         this.updateChatbotState(botMessage);
//       });
//   }

//   updateChatbotState(message) {
//     this.setState((prevState) => ({
//       ...prevState,
//       messages: [...prevState.messages, message],
//     }));
//   }

//   handleUserMessage(message) {
//     this.sendMessageToAPI(message);
//   }
// }

// // Message parser
// class MessageParser {
//   constructor(actionProvider) {
//     this.actionProvider = actionProvider;
//   }

//   parse(message) {
//     this.actionProvider.handleUserMessage(message);
//   }
// }

// // Chatbot component
// function ChatbotUI() {
//   const [messages, setMessages] = useState([]);

//   return (
//     <div className="chatbot-container">
//       <Chatbot
//         config={config}
//         messageParser={MessageParser}
//         actionProvider={ActionProvider}
//         messages={messages}
//         setState={setMessages}
//       />
//     </div>
//   );
// }

// export default ChatbotUI;


import React, { useState, useContext } from 'react';
import Chatbot from 'react-chatbot-kit';
import axios from 'axios';
import 'react-chatbot-kit/build/main.css';
import { FaComment } from 'react-icons/fa'; // Import an icon for the chatbot toggle
import "./Chatbot.css"
import { MyContext } from '../../context';
// Configuring the chatbot
const config = {
  botName: 'SupportBot',
  initialMessages: [
    {
      text: 'Hello! How can I assist you today?',
      id: 1,
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};


// Action provider
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }


  sendMessageToAPI(message) {
    // Your custom prompt
    const prompt = `This is an e-notarization application with jurisdiction in India. We enable online connectivity of notary officers\
    with their clients, thereby increasing accessibility, more income, ease of use. The notaries are stored over IPFS with their\
    transactions stored over blockchain to provide immutable ledgers and this AI chatbot for convenience. Hence it is a completely\
    secure and one of a kind product. You are an AI assistant responsible for answering user queries regarding this app.\ 
    Steps to be followed by any client are (1) download suitable notary template (2) fill it and upload (3) choose suitable time slot\
    join online meet and get notarized.\ 
    Steps to be followed by notaries are (1) enter their empty time slots (2) join and notarize assigned notaries. (3) all of their\
    records and ledgers are automatically generated, hence no need to do anything else.\ 
    Do not answer any irrelevant question.\ 
    Always answer in first person, in a personalized way.
    User Query: ${message}`;

    axios
      .post('http://localhost:5000/api/chat', { prompt })  // Call to backend API
      .then((response) => {
        const botMessage = this.createChatBotMessage(response.data.text);
        this.updateChatbotState(botMessage);
      })
      .catch((error) => {
        const botMessage = this.createChatBotMessage('Sorry, I encountered an error.');
        this.updateChatbotState(botMessage);
      });
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  handleUserMessage(message) {
    this.sendMessageToAPI(message);
  }
}

// Message parser
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    this.actionProvider.handleUserMessage(message);
  }
}

// Chatbot component
function ChatbotUI() {
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);  // State to toggle chatbot visibility
  const { user, setUser, type, setType } = useContext(MyContext);


  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chatbot-container">
      {/* Button to toggle the chatbot */}
      {!isChatOpen ? (
        <button className="chatbot-toggle" onClick={toggleChat}>
          <FaComment size={30} color="#5ccc9d" /> {/* Chat icon */}
        </button>
      ) : (
        <div className="chatbot-expanded">
          <button className="chatbot-close" onClick={toggleChat}>
            X {/* Close button */}
          </button>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            messages={messages}
            setState={setMessages}
          />
        </div>
      )}
    </div>
  );
}

export default ChatbotUI;
