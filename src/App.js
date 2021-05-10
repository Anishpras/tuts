import "./App.css";
import Text from "./components/Text";

const Name = ["Anish", "Anand", "Shubham", "Gautam", "Prashun"];

function App() {
  return (
    <div className="App">
      {Name.map((text) => {
        return <Text text={text} />;
      })}
    </div>
  );
}

export default App;
