import React, { Component } from 'react';
import './User.css';
import Modal from './Modal';
import { Icon } from 'antd';
import Editform from './EditForm';
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
class User extends Component {
    state = {
        isLiked: false,
        showModal: false
    }

    iconLike = () => {
        const like = this.state.isLiked;
        this.setState({
            isLiked: !like
        });
    }

    updateUser = (state) => {
        this.state.showModal = false;
        this.props.updateUserArr(state);

    }
    backgroundFix = () => {
        this.props.stopScollingbackGround();
    }
    iconEditHandler = (id) => {
        const show = this.state.showModal;
        this.setState({
            showModal: !show
        });
    }

    iconDeleteHandler = (id) => {
        //alert("I'm running");
        this.props.deluser(id);
    }

    render() {
        let dataset = [];
        const data = {
            "id": this.props.id,
            "name": this.props.name,
            "email": this.props.email,
            "website": this.props.website,
            "username": this.props.username,
            "city": this.props.city,
            "street": this.props.street,
            "suit": this.props.suit,
            "zipcode": this.props.zipcode,
            "company": this.props.companyname,
            "phone": this.props.phone
        };
        dataset = [...dataset, data];
        
        let showuserinfo = null;

        if(this.props.userinfo.length>0){
            console.log("I'm running");
            console.log(this.props.userinfo[0]);
            showuserinfo = this.props.userinfo.map(value=>{
                return <li>{value}</li>
            });
        }
        return (
            <div>
                {
                (this.props.userinfo.length > 0 && this.props.userinfo[0] === this.props.id) ? 
                <article className = "User">
                        {showuserinfo} 
                   
                </article>
                :
                <article className="User">
                <img src={'https://avatars.dicebear.com/v2/avataaars/' + this.props.username + '.svg?options[mood][]=happy'}></img>
                <hr />          
                <h4>{this.props.name}</h4>
                <div className="Email"><Icon type="mail" />{this.props.email}</div>
                <br />
                <div className="Phone"> <Icon type="phone" />{this.props.phone}</div>
                <br />
                <div className="Website"><Icon type="global" />{this.props.website}</div>
                <br />
                <hr />
                <div className="Icons">
                    <Icon onClick={this.iconLike} type="heart" style={{ color: "red" }} theme={this.state.isLiked === true ? "filled" : "outlined"} />
                    <Icon onClick={() => this.iconEditHandler(this.props.id)} type="edit" />
                    <Icon onClick={() => { this.iconDeleteHandler(this.props.id) }} type="delete" />
                    <ExcelFile element={<Icon type="download" />}>
                        <ExcelSheet data={dataset} name="Users">
                            <ExcelColumn label="ID" value="id" />
                            <ExcelColumn label="Name" value="name" />
                            <ExcelColumn label="Email" value="email" />
                            <ExcelColumn label="username" value="username" />
                            <ExcelColumn label="Website" value="website" />
                            <ExcelColumn label="City" value="city" />
                            <ExcelColumn label="Street" value="street" />
                            <ExcelColumn label="Phone" value="phone" />
                            <ExcelColumn label="Company" value="company" />
                        </ExcelSheet>
                    </ExcelFile>
                </div>
                {this.state.showModal === true ?
                    // <Modal
                    //     title="Basic Modal"
                    //     visible={this.state.visible}
                    //     onOk={this.handleOk}
                    //     onCancel={this.handleCancel}
                    // ><Editform updateUser={this.updateUser}
                    //     id={this.props.id}
                    //     name={this.props.name}
                    //     email={this.props.email}
                    //     phone={this.props.phone}
                    //     website={this.props.website} />
                    // </Modal>: null}
                    //{
                        <Modal> <Editform updateUser={this.updateUser}
                        id={this.props.id}
                        name={this.props.name}
                        email={this.props.email}
                        phone={this.props.phone}
                        website={this.props.website} /> </Modal> : null} 
                 </article>
                }
            </div>
        )
    };
}

export default User;