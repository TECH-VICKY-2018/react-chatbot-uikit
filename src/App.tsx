import './App.css';
import Chatbot from './components/chatbot/Chatbot';

function App() {
  return (
    <div aria-label="parent-container" style={{ height: "100vh", margin: 0, padding: 0 }}>
      <div aria-label="chatbot-parent" style={{ height: "100%", padding: "2rem" }}>
        <Chatbot />
      </div>
    </div >
  );
}

export default App;
