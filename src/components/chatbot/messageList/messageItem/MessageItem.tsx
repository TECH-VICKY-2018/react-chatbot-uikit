import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChatMessage } from '@/types/message';
import React from 'react';
import { TbUserCircle, TbSparkles } from 'react-icons/tb';
import { motion } from 'framer-motion';
import MessageRenderer from './messageRenderer/MessageRenderer';

interface MessageItemProps {
  message: ChatMessage;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isServer = message.type === 'SERVER';

  return (
    <motion.div
      initial={{ opacity: 0, x: isServer ? -10 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex w-full items-start px-4 py-2 ${isServer ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex max-w-[90%] ${isServer ? 'flex-row' : 'flex-row-reverse'} gap-3`}>
        <Avatar className="h-10 w-10">
          <AvatarImage />
          <AvatarFallback>
            {isServer ? (
              <TbSparkles className="h-full w-full text-purple-500" />
            ) : (
              <TbUserCircle className="h-full w-full text-blue-600" />
            )}
          </AvatarFallback>
        </Avatar>

        <div
          className={`overflow-hidden rounded-2xl px-4 py-2 text-left text-sm leading-relaxed break-words whitespace-pre-wrap shadow-md ${
            isServer
              ? 'rounded-bl-none bg-gray-100 text-gray-800'
              : 'rounded-br-none bg-blue-600 text-white'
          }`}
        >
          <MessageRenderer content={message.content} type={message.type} />
        </div>
      </div>
    </motion.div>
  );
};

export default MessageItem;
