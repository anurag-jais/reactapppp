import React,{Component } from 'react';

class Editform extends Component{
    state = {
        name: this.props.name,
        email: this.props.email,
        phone: this.props.phone,
        website: this.props.website,
        id: this.props.id
    }
    submitHandler = (event) =>{
        event.preventDefault();
        this.props.updateUser(this.state);
    }
    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <table>
                    <tr>
                        <td>Name: </td>
                        <td><input type ="text" value = {this.state.name} id = "name"
                        onChange={(e) => {this.setState({name: e.target.value})}}
                        /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type ="email" value = {this.state.email} id = "email"
                        onChange={(e) => {this.setState({email: e.target.value})}}
                        /></td>
                        
                    </tr>
                    <tr>
                        <td>phone:</td>
                        <td><input type ="text" value = {this.state.phone} id = "phone" 
                        onChange={(e)=> {this.setState({phone: e.target.value})}}
                        /></td>
                    </tr>
                    <tr>
                        <td>website:</td>
                        <td><input type ="text" value = {this.state.website} id = "website" 
                        onChange={(e)=>{this.setState({website: e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td></td><td><input type="submit" value="update"></input></td></tr>

                </table>
            </form>
        );
    }
}

export default Editform;