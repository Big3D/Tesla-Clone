import Main from "./components/main/Main";
import {ScrollingProvider} from 'react-scroll-section'

function App() {
  return (
    <div className="App">
      <ScrollingProvider>
      <Main />
      </ScrollingProvider>
    </div>
  );
}

export default App;
