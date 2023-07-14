import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { render } from 'react-dom';

class Main extends React.Component {
    render() {
        let HornedBeastComponents = [];
        data.forEach((beasts) => {
            HornedBeastsComponents.push(
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
                    {hornedBeastsComponents}
                </Row>
            </Container>
        );
    }
}

export default Main;