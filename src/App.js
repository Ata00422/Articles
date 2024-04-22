import './App.css';
import Articles from './Components/Articles';
import Nav from './Components/Nav';
import MyProvider from './ContextApi/MyProvider';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Nav/>
        <Articles />
      </MyProvider>
    </div>
  );
}

export default App;
