import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <p>Modern testing</p>
      <Button>Send</Button>
      <Input type="text" value="" placeholder="your name..." />
    </div>
  );
}

export default App;
