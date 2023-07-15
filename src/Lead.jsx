import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Lead extends React.Component {
    render() {
        let hornedBeastComponents = [];
        data.forEach((beasts) => {
            hornedBeastComponents.push(
                <Col xs={4} md={4} lg={4}>
                    <HornedBeasts 
                        name={beasts.title}
                        imgURL={beasts.image_url}
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