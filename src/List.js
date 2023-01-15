import React, { Component } from "react";
import ShowList from "./ShowList.js";

export default class List extends Component {
    constructor() {
        super();
        this.state = { 
        color: "red", 
        digit: 10, 
        list: [{title:"First"}, {title:"Second"}, {title:"Third"}]
    }; //состояние 
    }

    addItem(){
        return(
            <div>
                
                <button onClick={()=>{
                    this.setState(previousState => ({
                        list : [...previousState.list, {title: previousState.list.length+1}]
                    }))
                }}>ADD ITEM</button>
            </div>
        )
    }
    deleteItem(){
        return(
            <div>
                <button onClick={()=>{
                    this.setState(previousState => ({
                        list : [...previousState.list.slice(0, -1)]
                    }))
                }}>DELETE ITEM</button>
            </div>
        )
    }

    render(){
        console.log("renderList");
        return (
        <div>
            <div>
                <ShowList obj={this.state}/>
            </div>
            <div>
                {this.addItem()}
            </div>
            <div>
                {this.deleteItem()}
            </div>
        </div>
        )
    }
}