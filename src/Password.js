import React, { Component } from "react";

export default class Password extends Component {
    constructor() {
        super();
        this.state = { 
            errorMessage: '',
            confirmMessage: '',
            errorEmailMessage : '',
            password: '',
            temporaryPassword: '',
            unconfirmPassword: '',
            confirmPassword: '',
            inputType: 'password',
            confirmInputType: 'password',
            email: '',
            temporaryemail: ''
        }; //состояние 
        
    }
    
    inputPassword(){
        const handleSubmit = e => {
            e.preventDefault();
            let newitem = this.state.temporaryPassword;
            console.log("Submitting started");
            if (newitem.match("[a-zA-Z\d]{8,24}") != null && newitem.match("[a-zA-Z\d]{8,24}").length == 1) {
                console.log("Submitted");
                this.setState(({
                    unconfirmPassword: newitem,
                    errorMessage : ''
                }))
            } else if (newitem.match("[a-zA-Z\d]{8,24}") != null && newitem.match("[a-zA-Z\d]{8,24}").length > 1) {
                console.log("Not submitted");
                this.setState(({
                    unconfirmPassword: '',
                    errorMessage : "Wrong value! Too much simbols"
                }))
            } else if (newitem.match("[a-zA-Z\d]{8,24}") == null) {
                console.log("Not submitted");
                this.setState(({
                    unconfirmPassword: '',
                    errorMessage : "Wrong value! Too few characters or only digits"
                }))
            }
            
        }
        const handleChange = e=>
        {
            let newitem = e.target.value;
            console.log(newitem);
            this.setState({ temporaryPassword: newitem});
        }
        const handleCtrl = e =>{
            e.preventDefault();
        }
        
        const handleinputTypeChange = () => this.setState(({inputType}) => ({
            inputType: inputType === 'password' ? 'text' : 'password'
          }))
        return(
            <div className = "allForm">
                <form onSubmit={handleSubmit}>
                    <input 
                    type={this.state.inputType} 
                    value={this.state.temporaryPassword} 
                    onCut={handleCtrl}
                    onCopy={handleCtrl}
                    onPaste={handleCtrl} 
                    onChange={handleChange} 
                    style={{ backgroundColor: this.state.errorMessage === '' ? "white" : "red"}} 
                    required
                    />
                    
                    <button className="password_show" onClick={handleinputTypeChange}>{this.state.inputType === 'text' ? 'Hide' : 'Show'}</button>
                    
                    <button type="submit" className="buttonadd" >Submit</button>
                </form>
                <span className="error">{this.state.errorMessage}</span>
            </div>
        )
    }

    // Confirming
    confirmPassword(){
        
        const handleSubmit = e => {
            e.preventDefault();
            let newitem = this.state.unconfirmPassword;
            console.log("Confirming started");
            if (newitem === this.state.confirmPassword) {
                console.log("Confirming");
                this.setState(({
                    password: newitem,
                    confirmMessage : 'Password Confirmed!'
                }))
            } else {
                this.setState(({
                    confirmMessage : "Error : Passwords don't match"
                }))
            }
            
        }
        const handleChange = e=>
        {
            e.preventDefault();
            let newitem = e.target.value;
            console.log(newitem);
            this.setState({ confirmPassword: newitem});
        }
        const handleCtrl = e =>{
            e.preventDefault();
        }
        const handleinputTypeChange = () => this.setState(({confirmInputType}) => ({
            confirmInputType: confirmInputType === 'password' ? 'text' : 'password'
          }))
        return(
            <div className="allForm">
                <form onSubmit={handleSubmit}>
                    
                        <input className="forminner"
                        type={this.state.confirmInputType} 
                        value={this.state.confirmPassword} 
                        onCut={handleCtrl}
                        onCopy={handleCtrl}
                        onPaste={handleCtrl}  
                        onChange={handleChange} 
                        style={{ backgroundColor: this.state.confirmMessage.match("Error") == null ? "white" : "red"}} 
                        required/>
                        
                    
                    <button className="forminner" onClick={handleinputTypeChange}>{this.state.confirmInputType === 'text' ? 'Hide' : 'Show'}</button>
                    
                    <button type="submit" className="forminner">Submit</button>
                </form>
                <span className="error">{this.state.confirmMessage}</span>
            </div>
        )
    }

    inputEmail(){
        const handleSubmit = e => {
            let newitem = this.state.temporaryemail;
            console.log("Submitting started");
            if (newitem.match(/\S+@\S+\.\S+/) != null && newitem.match(/\S+@\S+\.\S+/).length == 1) {
                console.log("It's Email");
                this.setState(({
                    email: newitem,
                    errorEmailMessage : ''
                }))
            } else {
                console.log("It's not Email");
                this.setState(({
                    errorEmailMessage : "Error : It's not email"
                }))
            }
            
        }
        const handleChange = e=>
        {
            let newitem = e.target.value;
            console.log(newitem);
            this.setState({ temporaryemail: newitem});
        }
        
        return(
            <div className = "allForm">
                <div className="likeForm">
                    <input 
                    type="text"
                    value={this.state.temporaryemail} 
                    onChange={handleChange} 
                    style={{ backgroundColor: this.state.errorEmailMessage.match("Error") == null ? "white" : "red"}} 
                    required
                    />
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
                <span className="error">{this.state.errorEmailMessage}</span>
            </div>
        )
    }
    render(){
        return (
        <div>
            <div>
                {this.inputEmail()}
            </div>
            <div>
                {this.inputPassword()}
            </div>
            <div>
                {this.confirmPassword()}
            </div>
        </div>
        )
    }
}