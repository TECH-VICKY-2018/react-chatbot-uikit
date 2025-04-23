import { ChatMessage } from '@/types/message';
import React from 'react';
import MessageItem from './messageItem/MessageItem';

interface MessageListProps {
  messageList: ChatMessage[];
}

const MessageList: React.FC<MessageListProps> = (props) => {
  const { messageList } = props;

  return (
    <div className="flex-col space-y-4 rounded-lg border p-4">
      {messageList.map((message) => (
        <MessageItem message={message} key={message.id} />
      ))}
    </div>
  );
};

export default MessageList;
