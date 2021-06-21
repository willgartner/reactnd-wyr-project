import React, { Component, Fragment } from 'react';

class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="text-danger py-3 my-3 not-found-title">404</h1>
                <h2>The page you are looking for is not found. Please try a different page.</h2>
            </Fragment>
        );
    }
}

export default NotFound;