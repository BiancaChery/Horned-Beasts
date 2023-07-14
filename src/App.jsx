import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedBeasts from './components/HornedBeasts';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';

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
  render() {
    let HornedBeastComponents = [];
    data.forEach((beasts) => {
        HornedBeastsComponents.push(
            <Col>
                <HornedBeasts name={HornedBeasts.name}
                    imgURL={HornedBeasts.imgUrl} />
            </Col>
        );
    });
    return (
        <Container>
            <h2>Beasts:</h2>
            <Row>
                {hornedBeastsComponents}
            </Row>
        </Container>
    )
};
}


export default App;