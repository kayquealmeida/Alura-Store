import React from 'react';
import Departamentos from '../components/Departamentos';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Departamentos />
      <Footer />
    </div>
  );
}

export default App;
