import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedBeasts from './components/HornedBeasts';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  };
}

export default App;