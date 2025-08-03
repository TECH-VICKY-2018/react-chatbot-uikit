import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChatMessage } from '@/types/message';
import React from 'react';
import { TbUserCircle, TbSparkles } from 'react-icons/tb';
import { motion } from 'framer-motion';
import MessageRenderer from './messageRenderer/MessageRenderer';
import { CustomAvatarProps } from '@/types/avatar';
import styles from './MessageItem.module.css';

interface MessageItemProps {
  messageId: ChatMessage['id'];
  messageType: ChatMessage['type'];
  messageContent: ChatMessage['content'];
  botAvatarProps?: CustomAvatarProps;
  userAvatarProps?: CustomAvatarProps;
  botMessageBgColor?: string | undefined;
  userMessageBgColor?: string | undefined;
}

const MessageItem: React.FC<MessageItemProps> = (props) => {
  const {
    messageId,
    messageContent,
    messageType,
    botAvatarProps,
    userAvatarProps,
    botMessageBgColor = '#f6f3f4',
    userMessageBgColor = '#155dfc',
  } = props;

  const isServer = messageType === 'SERVER';
  const avatarProps = isServer ? botAvatarProps : userAvatarProps;

  return (
    <motion.div
      initial={{ opacity: 0, x: isServer ? -10 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`${styles.messageContainer} ${isServer ? styles.serverMessage : styles.clientMessage}`}
      aria-label={`${messageType}-message-${messageId}`}
    >
      <div className={`${styles.messageWrapper} ${isServer ? styles.messageWrapperServer : styles.messageWrapperClient}`}>
        <Avatar className={styles.avatar}>
          <AvatarImage src={avatarProps?.src} />
          <AvatarFallback>
            {avatarProps?.fallback ? (
              avatarProps.fallback
            ) : isServer ? (
              <TbSparkles className={`${styles.icon} ${styles.serverIcon}`} />
            ) : (
              <TbUserCircle className={`${styles.icon} ${styles.clientIcon}`} />
            )}
          </AvatarFallback>
        </Avatar>

        <div
          className={`${styles.messageBubble} ${
            isServer ? styles.serverMessageBubble : styles.clientMessageBubble
          }`}
          style={{
            backgroundColor: isServer ? botMessageBgColor : userMessageBgColor,
          }}
        >
          <MessageRenderer content={messageContent} type={messageType} />
        </div>
      </div>
    </motion.div>
  );
};

export default MessageItem;
