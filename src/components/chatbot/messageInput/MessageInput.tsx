import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { TbSend2, TbX } from 'react-icons/tb';

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
    <div className="relative flex w-full items-center gap-2 border-t py-2">
      <Input
        type="text"
        placeholder="Ask me something..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyDown={handleEnterClick}
        className="pr-20"
      />
      <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1">
        {messageInput && (
          <Button
            onClick={() => setMessageInput('')}
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-gray-500"
          >
            <TbX className="h-4 w-4" />
          </Button>
        )}
        <Button
          size="icon"
          onClick={sendMessage}
          className="h-7 w-7 rounded-full border border-gray-300"
        >
          <TbSend2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
