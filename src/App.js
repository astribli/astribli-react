import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [categories] = useState([
    {
      name: 'about me',
      description: 'A little bit of info about me.',
    },
    { name: 'contact', description: 'A way to get in touch with me' },
    { name: 'portfolio', description: 'A collection of projects I have done' },
    { name: 'resume', description: 'View my current resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
       <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;

