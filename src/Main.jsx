import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { render } from 'react-dom';

class Main extends React.Component {
    render() {
        let title = "uniWhal";
        return (
            <div>
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" />
                <h2>{title}</h2>
                <p>"A unicorn and narwhal touching horns</p>
            </div>
        )
    }
}
class Main extends React.Component {
    render() {
        let title = "Rhino Family";
        <div>
            <h2>{title}</h2>
            <p>"Rhino family"</p>
            <img src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" />
        </div>
    }
}
class Main extends React.Component {
    render() {
        let title = "Unicorn Head";
        <div>
            <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" />
            <h2>{title}</h2>
            <p>"Silly unicorn hat"</p>
        </div>
    }
}

render() {
    let HornedBeastComponents = [];
    data.forEach((beasts) => {
        HornedBeastsComponents.push(
            <Col>
                <HornedBeasts name={HornedBeasts.name} 
                imgURL={HornedBeasts.imgUrl} 
                handleOpenBeast={ handleOpenBeast }
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

export default Main;