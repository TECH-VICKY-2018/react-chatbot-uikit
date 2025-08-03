import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { TbSend2, TbX } from 'react-icons/tb';
import styles from './MessageInput.module.css';

interface MessageInputProps {
  onSendMessage: (content: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [messageInput, setMessageInput] = useState<string>('');

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    onSendMessage(messageInput.trim());
    setMessageInput('');
  };

  const handleEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.container}>
      <Input
        type="text"
        placeholder="Ask me something..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyDown={handleEnterClick}
        className={styles.input}
      />
      <div className={styles.buttonsContainer}>
        {messageInput && (
          <Button
            onClick={() => setMessageInput('')}
            variant="ghost"
            size="icon"
            className={styles.clearButton}
          >
            <TbX className={styles.icon} />
          </Button>
        )}
        <Button
          size="icon"
          onClick={sendMessage}
          className={styles.sendButton}
        >
          <TbSend2 className={`${styles.icon} ${styles.sendIcon}`} />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
