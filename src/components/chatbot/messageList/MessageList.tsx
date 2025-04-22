import { ChatMessage } from '@/types/message';
import React from 'react';

interface MessageListProps {
  messageList: ChatMessage[];
}

const MessageList: React.FC<MessageListProps> = (props) => {
  const { messageList } = props;

  return (
    <div className="flex-col space-y-4 rounded-lg border p-4">
      {messageList.map((message, index) =>
        message.type === 'SERVER' ? (
          <div key={message.id} className="flex items-start gap-2">
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-gray-300"></div>
            <div className="max-w-[80%] rounded-lg bg-gray-200 p-2 text-left text-gray-800">
              {message.content}
            </div>
          </div>
        ) : (
          <div key={message.id} className="flex items-start justify-end gap-2">
            <div className="max-w-[80%] rounded-lg bg-blue-500 p-2 text-left text-white">
              {message.content}
            </div>
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-300"></div>
          </div>
        )
      )}
    </div>
  );
};

export default MessageList;
