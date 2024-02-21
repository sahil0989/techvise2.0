import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/section/Home';
import CoursesSection from './components/section/CoursesSection';
import AboutSection from './components/section/AboutSection';
import TutorSection from './components/section/TutorSection';
import ContactSection from './components/section/ContactSection';
import CoursePage from './components/CoursePage';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='h-20 w-full'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<CoursesSection />} />
        <Route path='/about' element={<AboutSection />} />
        <Route path='/tutor' element={<TutorSection />} />
        <Route path='/contact' element={<ContactSection />} />
        <Route path='/course' element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
