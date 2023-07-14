import React from 'react';

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
    };
}

export default HornedBeasts