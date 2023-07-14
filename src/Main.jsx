import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Main extends React.Component {
    render() {
        let hornedBeastComponents = [];
        data.forEach((beasts) => {
            hornedBeastComponents.push(
                <Col>
                    <HornedBeasts name={beasts.name}
                        imgURL={beasts.imgUrl}
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

export default Main;