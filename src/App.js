import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import coverImage from '../src/assets/cover/Mullet.jpg'


function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: "photos and project links to my work",
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <img src={coverImage} className="" style={{ width: "25%", maxHeight: "350px" }} alt="cover" />
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio currentCategory={currentCategory}></Portfolio>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;