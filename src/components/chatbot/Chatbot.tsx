import { ChatMessage } from '@/types/message';
import React, { useState } from 'react';
import MessageList from './messageList/MessageList';
import MessageInput from './messageInput/MessageInput';
import { v4 as uuidv4 } from 'uuid';
import { SAMPLE_BOT_MARKDOWN_RESPONSE } from '@/const/sampleMessage';

interface ChatbotProps {
  // We'll add customization props here later
}

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

    // Simulate bot response after a delay
    setTimeout(() => {
      const newBotMessage: ChatMessage = {
        id: uuidv4(),
        type: 'SERVER',
        content: SAMPLE_BOT_MARKDOWN_RESPONSE,
      };

      addMessageToList(newBotMessage);
    }, 1000);
  };

  return (
    <div aria-label="chat-container" className="flex h-full w-full flex-col">
      <MessageList messageList={messageList} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;
