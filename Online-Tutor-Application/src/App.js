import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import { Header } from './components/header';
import Footer from './components/footer';
import Navbar from './components/navbar';
import AvgTutorRating from './components/avgTutorRating';
import TutorHome from './components/tutorHome';
import StudentHome from './components/studentHome';
import TutorProfile from './components/tutorProfile';
import StudentFirstHome from './components/studentFirstHome';

function App() {
  return (
    <BrowserRouter>
     <div className='imageClass'></div>
     <Header />
      <Routes>
        <Route path='/' element={<Login/>}> </Route>
        <Route path='/Tutor/Home' element = {<TutorHome />}></Route>;
        <Route path='/Student/Home' element = {<StudentHome />}></Route>;
        <Route path='/Tutor/FirstHome' element = {<Home />}></Route>;
        <Route path='/Tutor/Profile' element = {<TutorProfile />}></Route>;
        <Route path='/Student/FirstHome' element = {<StudentFirstHome />}></Route>;

      </Routes>
      <Footer/>
      {/* <AvgTutorRating/> */}
    </BrowserRouter>
  );
}

export default App;
