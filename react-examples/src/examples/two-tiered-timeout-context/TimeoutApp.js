import TimeoutModal from "./components/TimeoutModal";
//import HelloWorld from "./components/HelloWorld";
import TimeoutControls from "./components/TimeoutControls";

// ONE or TWO timeout tier examples
//import { TimeoutContextProvider } from "./timeout-context/Timeout-Context-One-Tier"; // use curly braces for importing named exports (not default)
import { TimeoutContextProvider } from "./timeout-context/Timeout-Context-Two-Tier";

function App() {
  return (
    <TimeoutContextProvider>
      <TimeoutModal />
      <TimeoutControls />
    </TimeoutContextProvider>
  );
}

export default App;
