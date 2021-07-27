import ChatRenderer from "../components/ChatRenderer";
import { useLocalStorage } from "../data/useLocalStorage";
import "./App.scss";

const App = () => {
  const [currentStory, setCurrentStory] = useLocalStorage("story", 0);
  const [progression, setProgression] = useLocalStorage("progression", []);
  return (
    <div className="app">
      <ChatRenderer
        currentStory={currentStory}
        setCurrentStory={setCurrentStory}
        progression={progression}
        setProgression={setProgression}
      />
    </div>
  );
};

export default App;
