import { ChatMessage } from '@/types/message';
import React, { useEffect, useRef } from 'react';
import MessageItem from './messageItem/MessageItem';
import { CustomAvatarProps } from '@/types/avatar';

interface MessageListProps {
  messageList: ChatMessage[];
  botAvatarProps?: CustomAvatarProps;
  userAvatarProps?: CustomAvatarProps;
  botMessageBgColor?: string | undefined;
  userMessageBgColor?: string | undefined;
}

const MessageList: React.FC<MessageListProps> = (props) => {
  const { messageList, botAvatarProps, userAvatarProps, botMessageBgColor, userMessageBgColor } =
    props;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  return (
    <div className="custom-scrollbar h-full overflow-x-hidden overflow-y-auto rounded-lg border p-4">
      <div className="flex flex-1 flex-col space-y-4">
        {messageList.map((message) => (
          <MessageItem
            key={message.id}
            messageId={message.id}
            messageContent={message.content}
            messageType={message.type}
            botAvatarProps={botAvatarProps}
            userAvatarProps={userAvatarProps}
            botMessageBgColor={botMessageBgColor}
            userMessageBgColor={userMessageBgColor}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;
