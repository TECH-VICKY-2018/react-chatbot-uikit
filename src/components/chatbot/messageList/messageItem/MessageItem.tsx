import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChatMessage } from '@/types/message';
import React from 'react';
import { TbUserCircle } from 'react-icons/tb';
import { TbSparkles } from 'react-icons/tb';

interface MessageItemProps {
  message: ChatMessage;
}

const MessageItem: React.FC<MessageItemProps> = (props) => {
  const { message } = props;

  return message.type === 'SERVER' ? (
    <div className="flex items-start gap-2">
      <Avatar>
        <AvatarImage />
        <AvatarFallback>
          <TbSparkles style={{ height: '90%', width: 'auto' }} />
        </AvatarFallback>
      </Avatar>
      <div className="max-w-[80%] rounded-lg bg-gray-200 p-2 text-left text-gray-800">
        {message.content}
      </div>
    </div>
  ) : (
    <div className="flex items-start justify-end gap-2">
      <div className="max-w-[80%] rounded-lg bg-blue-500 p-2 text-left text-white">
        {message.content}
      </div>
      <Avatar>
        <AvatarImage />
        <AvatarFallback>
          <TbUserCircle style={{ height: '90%', width: 'auto' }} />
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default MessageItem;
