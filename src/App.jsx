import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedBeasts from './components/HornedBeasts';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main title="uniWhal" />
        <Main title="Rhino Family" />
        <Main title="Unicorn Head" />
        <Footer />
      </div>
    )
  };
}

export default App;