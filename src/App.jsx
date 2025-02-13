import React, { useState } from 'react';
import Hero from './components/Hero/Hero'
import Interactive from './components/Main/Interactive'
import Gallary from './components/Main/Gallary'
import Footer from './components/Footer/Footer'


const App = () => {
  const [navIsClosed, setNavIsOpen] = useState(true);
  return (
    <div>
      <Hero toggleElements={setNavIsOpen} />

      {navIsClosed && (
        <main>
          <Interactive />
          <Gallary />
        </main>
      )}

      {navIsClosed && <Footer />}
    </div>
  )
}

export default App