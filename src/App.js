import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Table from './components/Table'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Header />
        <Table />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;