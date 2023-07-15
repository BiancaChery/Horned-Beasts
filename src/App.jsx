import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalBeastName: "uniWhal",
      modalBeastImgUrl: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      modalIsShowing: false
    };
  }

  handleShow = () => {
    console.log("Please Show Modal");
    this.setState({
      modalIsShowing: true
    });
  }

  handleClose = () => {
    this.setState({
      modalIsShowing: false
    });
  }

  handleOpenBeast = (beastTitle, beastImgUrl) => {
    console.log("open beast" + beastTitle, beastImgUrl);
    this.setState({
      modalIsShowing: true,
      modalBeastName: beastTitle,
      modalBeastImgUrl: beastImgUrl 
    });
  };

  render() {
    return (
      <Container>
        <Header />
        {/* <BeastDisplayModal /> */}
        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Beasts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalBeastTitle}</h2>
            <img src={this.state.modalBeastImgUrl} />
          </Modal.Body>
        </Modal>
        <Main handleOpenBeast={this.handleOpenBeast} />
        <Footer />
      </Container>
    )
  };
}

export default App;