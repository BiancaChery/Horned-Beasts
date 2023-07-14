import React from 'react';
import { render } from 'react-dom';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedCount: 0
        };
    }

    handleClickBeast = () => {
        console.log("You've clicked on" + this.props.name);
        this.setState({
            clickedCount: this.state.clickedCount + 1
        });
    }
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p onClick={this.handleClickBeast}>Clicked Beast</p>
                <img src={this.props.imgURL} onClick={this.props.handleOpenBeast} />
            </div>
        )
    }
    render() {
        return (
            <div>
                <img alt="uniwhal" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" />
                <h2>{UniWhal}</h2>
                <p>"A unicorn and narwhal touching horns</p>
            </div>
        )
    };
}
class HornedBeasts extends React.Component {
    render() {
        return (
            <div>
                <h2>{Rhino}</h2>
                <p>"Rhino family"</p>
                <img alt="rhino" src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" />
            </div>
        )
    };
}
class HornedBeasts extends React.Component {
    render() {
        return(
            <div>
            <img alt="unicorn" src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" />
            <h2>{Unicorn}</h2>
            <p>"Silly unicorn hat"</p>
        </div>
        )
    }
}

constructor(props) {
    super(props);
    this.state = {
        favoritedCount: 0
    };
}
render(){
    return(
        <div>
            <h2>{this.props.name}</h2>
            <img src={this.props.imgURL}/>
            <p>Favorites</p>
        </div>
    )
}



export default HornedBeasts