import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Main from './components/Main';
import ModeToggler from './components/ModeToggler';
import MealsProvider from './provider/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import Home from './pages/Home'
import About from './pages/About'
import ListTransformation from './components/ListTransformation';
import Form from './components/Form';
import FeedbackForm from './components/FeedbackForm';
import SignupForm from './components/SignupForm';
import LowCalorieDesserts from './components/LowCalorieDesserts';
import { Routes, Route, Link} from 'react-router-dom'
import { useUser } from './context/UserContext';
import UseStateHook from './hooks/UseStateHook';
import LittleLemonGoals from './components/LittleLemonGoals';

const Btn = () => {

  const clickHandler = () => {
    console.log('Clicked!!');
  }

  return (
    <button onClick={clickHandler}>Click me</button>
    // <button onMouseOver={clickHandler}>Click me</button>
  )
}

const LoggedInUser = () => {

  const {user} = useUser();

  return (
    <p>
      Hello {user.name}
    </p>
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
    // <div>
    //   <MealsProvider>
    //     <MealsList />
    //     <Counter />
    //   </MealsProvider>
    // </div>
    // router
    // <div>
    //   <nav className='nav'>
    //     {/* <a href='#'>Home Page</a>
    //     <a href='#'>About Page</a> */}
    //     <Link to="/">Home Page</Link>
    //     <Link to="/about">About Page</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/about" element={<About />}/>
    //   </Routes>
    // </div>
    // <ListTransformation />
    // <LowCalorieDesserts />
    // <Form />
    // <FeedbackForm />
    // <SignupForm />
    // <LoggedInUser />
    // <UseStateHook />
    <LittleLemonGoals />
  )
}

export default App;
