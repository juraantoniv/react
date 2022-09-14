import './App.css';
import Users from "./components/users/Users";
import Simpsons from "./data_simpsons";
function App() {



  return (<div className='Big'>
    <Simpsons/>
    <h2>Rick $ Morty</h2>
    <div className='two'>
      <Users/>
    </div>




  </div>);
}

export default App;
