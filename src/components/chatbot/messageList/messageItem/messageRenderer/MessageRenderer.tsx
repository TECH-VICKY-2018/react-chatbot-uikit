import React from 'react';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ChatMessage } from '@/types/message';
import Markdown from 'react-markdown';

interface MessageRendererProps {
  content: string;
  type: ChatMessage['type'];
}

const MessageRenderer: React.FC<MessageRendererProps> = (props) => {
  const { content, type } = props;

  const renderContent = () => {
    const contentString = content.trim();
    return type === 'SERVER' ? (
      <div className="">
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {contentString}
        </Markdown>
      </div>
    ) : (
      <span>{contentString}</span>
    );
  };

  return <div>{renderContent()}</div>;
};

export default MessageRenderer;
