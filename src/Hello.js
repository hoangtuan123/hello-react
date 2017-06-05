import React, { Component } from 'react';

export default class Hello extends Component{
    render() {
        return (
            <div class="hello">
                <b>Test</b>
                <Hi/>
            </div>
        );
    }
}

class Hi extends Component{
    render(){
        return (
            <div>
                <b>Hi</b>
            </div>
        )
    };
}