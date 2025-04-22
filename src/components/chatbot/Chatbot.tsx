import { ChatMessage } from '@/types/message';
import React, { useState } from 'react';
import MessageList from './messageList/MessageList';
import MessageInput from './messageInput/MessageInput';
import { v4 as uuidv4 } from 'uuid';

interface ChatbotProps {}

const Chatbot: React.FC<ChatbotProps> = () => {
  const [messageList, setMessageList] = useState<ChatMessage[]>([]);

  const addMessageToList = (newMessage: ChatMessage) => {
    setMessageList((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleSendMessage = (userMessage: string) => {
    const newUserMessage: ChatMessage = {
      id: uuidv4(),
      type: 'CLIENT',
      content: userMessage,
    };

    addMessageToList(newUserMessage);

    setTimeout(() => {
      const newBotMessage: ChatMessage = {
        id: uuidv4(),
        type: 'SERVER',
        content: 'This is a sample response from the chatbot!',
      };

      addMessageToList(newBotMessage);
    }, 3000);
  };

  return (
    <div className="mx-auto flex max-w-md flex-col">
      <MessageList messageList={messageList} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;
