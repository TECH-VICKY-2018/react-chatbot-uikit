import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { TbSend2 } from 'react-icons/tb';

const MessageInput = () => {
  const [messageInput, setMessageInput] = useState<string>('');

  const handleSendMessage = () => {
    console.log('Input message:::', messageInput);
    setMessageInput('');
  };

  return (
    <div className="flex">
      <Input
        type="text"
        placeholder="Ask me something..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <Button size="icon" onClick={handleSendMessage} className="rounded-full border">
        <TbSend2 />
      </Button>
    </div>
  );
};

export default MessageInput;
