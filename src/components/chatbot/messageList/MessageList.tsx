import { ChatMessage } from '@/types/message';
import React, { useEffect, useRef } from 'react'; // Import useRef and useEffect
import MessageItem from './messageItem/MessageItem';

interface MessageListProps {
  messageList: ChatMessage[];
}

const MessageList: React.FC<MessageListProps> = (props) => {
  const { messageList } = props;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  return (
    <div className="h-full overflow-x-hidden overflow-y-auto rounded-lg border p-4 custom-scrollbar">
      <div className="flex flex-1 flex-col space-y-4">
        {messageList.map((message) => (
          <MessageItem message={message} key={message.id} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;
