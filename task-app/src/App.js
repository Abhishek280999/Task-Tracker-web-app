import logo from './logo.svg';
import './App.css';
import Header from './Compounent/Header';
import TaskBoard from './Compounent/TaskBoard';

function App() {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-blue-200  w-full h-full">
      <Header/>
      <div className=' pt-10'>
      <TaskBoard/>

      </div>
    </div>
  );
}

export default App;
