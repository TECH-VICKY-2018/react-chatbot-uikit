import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { TbSend2 } from 'react-icons/tb';

interface MessageInputProps {
  onSendMessage: (content: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = (props) => {
  const { onSendMessage } = props;

  const [messageInput, setMessageInput] = useState<string>('');

  const sendMessage = () => {
    console.log('Input message:::', messageInput);
    onSendMessage(messageInput);
    setMessageInput('');
  };

  return (
    <div className="flex gap-1">
      <Input
        type="text"
        placeholder="Ask me something..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <Button size="icon" onClick={sendMessage} className="rounded-full border">
        <TbSend2 />
      </Button>
    </div>
  );
};

export default MessageInput;
