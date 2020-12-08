import React, { Component } from 'react';

class Movie extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
                <h1>Title: {this.props.title}</h1>
                <p>Hours: {this.props.hours}</p>
                <p>Minutes: {this.props.minutes}</p>
            </div>
        )
    }
}

export default Movie;