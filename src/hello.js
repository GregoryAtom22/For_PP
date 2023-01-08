import React, { Component } from "react";

export default class Hello extends Component {
    constructor() {
        super();
        this.state = { color: "red", digit: 0}; //состояние 
    }

    componentDidMount(){
        console.log(this.props.parent_color)
        setTimeout(()=> {
            this.setState({ digit: 10, color: this.props.parent_color });
        }, 2000);
        console.log("componentDidMount");
    }



    render(){
        console.log("render");
        return 
        <div>
            <div onClick={()=>{
                //this.state = { color: "yellow" } неработает
                this.setState({ color: "yellow" });
            }} style={{ backgroundColor: this.state.color }}
            >
                Hello
            </div>
            <div>[this.state.digit]</div>
        </div>
    }
}