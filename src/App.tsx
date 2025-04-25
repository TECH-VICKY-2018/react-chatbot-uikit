import './App.css';
import Chatbot from './components/chatbot/Chatbot';

function App() {
  return (
    <div aria-label="parent-container" className="flex h-full w-full justify-center">
      <div className="flex w-[50%]" aria-label="chatbot-parent">
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
