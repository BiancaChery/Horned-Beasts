import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeasts from './HornedBeasts';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modalBeastName: "uniWhal",
        modalImgUrl: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
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

handleOpenBeast = (beastName, beastImgUrl) => {
  console.log("open beast" + beastName);
}

  // render() {
  //   return (
  //     <div>
  //       <Header />
  //       <BeastDisplayModal />
  //       <Button variant="primary"
  //               onClick={this.handleShow}>
  //         Launch Modal
  //       </Button>
  //       <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Beasts</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <h2>{this.state.modalBeastName}</h2>
  //           <img src={this.state.modalImgUrl} />
  //         </Modal.Body>
  //       </Modal>
  //       <Main handleOpenBeast={this.handleOpenBeast}/>
  //       <Footer />
  //     </div>
  //   )
  // };
  render() {
    let hornedBeastComponents = [];
    data.forEach((beasts) => {
        hornedBeastComponents.push(
            <Col>
                <HornedBeasts name={beasts.name}
                    imgURL={beasts.imgUrl} />
            </Col>
        );
    });
    return (
        <Container>
            <h2>Beasts:</h2>
            <Row>
                {hornedBeastComponents}
            </Row>
        </Container>
    )
};
}


export default App;