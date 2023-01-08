import React, { Component } from "react";

export default class Hello extends Component {
    constructor() {
        super();
        this.state = { color: "red"};
    }

    render(){
        return <div style={{ backgroundColor: "green" }}>Hello</div>
    }
}