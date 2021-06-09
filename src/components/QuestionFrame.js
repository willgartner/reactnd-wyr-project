import React, { Component } from 'react';

class QuestionFrame extends Component {
    render() {
        return (
            <div>
                <h1>Frame</h1>
                <hr/>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default QuestionFrame;