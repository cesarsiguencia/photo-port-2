import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  //this hook was moved from the Nav component because Nav could not identify Gallery as a child, so this was moved to App.js, or lifting the state
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]); // this returns an array with our current value followed by what we want out second value to equal to (setCurrentCategory), we are passing our first object from our categories here

  const [contactSelected, setContactSelected] = useState(false); 
  // originally set to false so that the contact page doesn't automatically show up when we go to the homepage, only conditionally

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        // we are using props here, which are parameters passed as component attributes in the JSX (ex, data-target), instead of parameters through generic functions. Now, the above hooks will be displayed in our Nav
      ></Nav>
      <main>
        <div>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            </>
            ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

//Gallery will display the proper information, name, description, and photos (through PhotoList in Gallery) for the currentCatergory from the selected Nav part, which is an attribute currently in the Gallery component. (App is passing an attribute to Gallery, and in the Gallery file, Gallery is passing an attribute to Photolist for the correct photos)