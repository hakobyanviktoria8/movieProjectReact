import React from 'react';
import "./FlipCart.css";
import ReactCardFlip from 'react-card-flip';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <div className={"frontSide"}>
                    <img

                        src="//static.pexels.com/photos/59523/pexels-photo-59523.jpeg"
                    />

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div  className={"frontSide"}>
                    <img

                        src="//img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?no-auto"
                    />

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Example;