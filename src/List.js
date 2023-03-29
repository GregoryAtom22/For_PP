import React, { Component } from "react";
import ShowList from "./ShowList.js";

export default class List extends Component {
    constructor() {
        super();
        this.state = { 
            errorMessage: '',
            listitem: '',
            list: ["First", "Second", "Third"]
        }; //состояние 
        
    }
    
    addItem(){
        
        const handleSubmit = e=>{
            e.preventDefault();
            let newitem = this.state.listitem
            if (newitem == '' || newitem.match("[a-zA-Zs]+") != null) {
                this.setState(previousState => ({
                    list : [...previousState.list, newitem],
                    listitem: '',
                    errorMessage : ''
                }))
            } else  {
                this.setState(previousState => ({
                    errorMessage : "Wrong value! Only alphabet characters"
                }))
            }
            
        }
        const handleChange = e=>
        {
            let newitem = e.target.value;
            console.log(newitem);
            this.setState({ listitem: newitem});
        }
        const handleMouseOver = e => {
            e.target.style = "height:30px;width:120px;"

        }
        const handleMouseLeave = e => {
            e.target.style = "height:25px;width:100px;"

        }
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={this.state.listitem} onChange={handleChange}  required/>
                    <span className="error">{this.state.errorMessage}</span>
                    <button type="submit" className="buttonadd" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>ADD ITEM</button>
                </form>
            </div>
        )
    }
    deleteItem(){
        return(
            <div>
                <button className="buttonremove" onClick={()=>{
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
            <div className="List">
                <ShowList obj={this.state}/>
            </div>
            <div >
                {this.addItem()}
            </div>
            <div >
                {this.deleteItem()}
            </div>
        </div>
        )
    }
}