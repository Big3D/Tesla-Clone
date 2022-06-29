import Main from "./components/main/Main";
import {ScrollingProvider} from 'react-scroll-section'
import Footer from "./components/nav_footer/Footer";

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
