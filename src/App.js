import './App.css';
import LifecycleA from './components/LifecycleA'
import CompDidUpdate from './Counter-ShouldComponentUpdate/CompDidUpdate';

function App() {
  return (
    <div className="App">
     {/* <LifecycleA/> */}
     <CompDidUpdate/>
    </div>
  );
}

export default App;
