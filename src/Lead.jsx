import React from 'react';
import HornedBeasts from './HornedBeasts';
// import data from './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Lead extends React.Component {
    render() {
        let hornedBeastComponents = [];
        this.props.beast.forEach((beast) => {
            hornedBeastComponents.push(
                <Col xs={12} md={4} lg={3} key={beast._id} >
                    <HornedBeasts 
                        name={beast.title}
                        imgURL={beast.image_url}
                        handleOpenBeast={this.props.handleOpenBeast}
                    />
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
        );
    }
}

export default Lead;