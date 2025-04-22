import { ChatMessage } from '@/types/message';
import React, { useState } from 'react';
import MessageList from './messageList/MessageList';
import MessageInput from './messageInput/MessageInput';

interface ChatbotProps {}

const Chatbot: React.FC<ChatbotProps> = () => {
  const [messageList, setMessageList] = useState<ChatMessage[]>([
    { id: '1', type: 'SERVER', content: 'Initial Server message' },
    { id: '2', type: 'CLIENT', content: 'Initial Client message' },
  ]);

  console.log('current message list:::', messageList);

  return (
    <div className="mx-auto flex flex-col max-w-md">
      <MessageList messageList={messageList} />
      <MessageInput />
    </div>
  );
};

export default Chatbot;
