import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm'
import Resume from './components/Resume'

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const[resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected = {setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        setResumeSelected={setResumeSelected}
        resumeSelected = {resumeSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
  <>
    {!aboutSelected && !resumeSelected && <Gallery currentCategory={currentCategory}></Gallery>}
    {aboutSelected &&<About></About>}
    {resumeSelected && <Resume></Resume>}
  </>
) : (
    <ContactForm></ContactForm>
  )}
      </main>
    </div>
  );
}

export default App;
