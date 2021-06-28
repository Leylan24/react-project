import React, { Component } from 'react';
import Counter from './Counter';

class Ingredient extends Component {
    render() {
        return (
            <div>
                <h2>Name of Ingredient:{this.props.name}</h2>
                <Counter/>
            </div>
        )
    }
}

export default Ingredient