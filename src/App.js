import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Main from './components/Main';
import ModeToggler from './components/ModeToggler';
import MealsProvider from './provider/MealsProvider';

const Btn = () => {

  const clickHandler = () => {
    console.log('Clicked!!');
  }

  return (
    <button onClick={clickHandler}>Click me</button>
    // <button onMouseOver={clickHandler}>Click me</button>
  )
}

function App(props) {
  return (
    // <div>
    //   <Heading name="Anna" color="purlple"/>
    //   <Main greet="Howdy"/>
    //   <p>{props.title}</p>
    //   <Btn />
    //   <ModeToggler />
    // </div>
    // Context
    <div>
      <MealsProvider />
    </div>
  )
}

export default App;
