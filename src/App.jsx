import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Lead from './Lead';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import "./App.css";
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
    this.state = {
      data: data, 
      filterBy: "all"
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", event.target.beastHorn.value);
    let title = `${event.target.beastHorn.value}`
  }

  handleSelect = (event) => {
    let value = event.target.value;
    console.log(value);
    this.setState({
      filterBy: value
    });
  }

  render() {
    let filteredHorns = this.state.data;
    if(this.state.filterBy === "1") {
      filteredHorns = this.state.data.filter((beast) => beast.horns[0] === 1);
    } else if(this.state.filterBy === "2") {
      filteredHorns = this.state.data.filter((beast) => beast.horns[0] === 2);
    } else if(this.state.filterBy === "other") {
      filteredHorns = this.state.data.filter((beast) => beast.horns[0] !== 1 && beast.horns[0] !== 2);
    }
    let titleList = filteredHorns.map((beast) => ( <li key={beast._id}>{beast.title}</li> ));
    
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
            <label>
                beast title: <input type="text" title="beastTitle" />
            </label>
            <button type="submit">Check It</button>
        </form>
        <form>
          <select onChange={this.handleSelect}>
            <option value="All">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="Other">Other</option>
          </select>
        </form>
        <ul>
          {titleList}
        </ul>
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
        <Lead handleOpenBeast={this.handleOpenBeast} 
        beasts={filteredHorns} 
        />
        <Footer />
      </Container>
    )
  };
}

export default App;