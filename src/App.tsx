import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@/components/ui/button';
import Chatbot from './components/chatbot/Chatbot';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Chatbot />
    </div>
  );
}

export default App;
