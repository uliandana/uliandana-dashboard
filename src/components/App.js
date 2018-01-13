import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
        return (
            <h1>App ready</h1>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};