import React from 'react';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedCount: 0
        };
    }

    handleClickBeast = () => {
        console.log("You've clicked on" + this.props.title);
        this.setState({
            clickedCount: this.state.clickedCount + 1
        });
    }

    handleClickImage = (event) => {
        this.props.handleOpenBeast(this.props.title, this.props.imgURL);
    }

    render() {
        let hearts = '';
        for((let i=0, i<this.state.clickedCount, i++;) {
            hearts+='💚';
        }
        
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p onClick={this.handleClickBeast}>Liked Beast {this.state.clickedCount} {hearts}</p>
                <img
                    src={this.props.imgURL}
                    onClick={this.handleClickImage}
                />
            </div>
        )
    };
}

export default HornedBeasts