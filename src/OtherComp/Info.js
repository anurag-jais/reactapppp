import React, { Component } from 'react';
import Users from './Users';
import axios from 'axios';
import './Info.css';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import ReactExport from 'react-data-export';
import { Modal, Button } from 'antd';


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Info extends Component {
  state = {
    users: [],
    visible: false,
    rows: null,
    cols: null,
    showtable: false,
    showdata: false,
    userinfo: []
  }

  deluser = (id) => {
    const users = this.state.users;
    users.splice(id - 1, 1);
    this.setState({
      users: users
    });
  }

  updateUserArr = (state) => {
    const users = this.state.users;
    users[state.id - 1].name = state.name;
    users[state.id - 1].email = state.email;
    users[state.id - 1].phone = state.phone;
    users[state.id - 1].website = state.website;
    this.setState({
      users: users
    });
  }

  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };



  handleOk = e => {
    //console.log(e);
    this.setState({
      visible: false,
    });
  }

  fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log("Here");
        console.log(resp.rows[1]);

        this.setState({
          cols: resp.cols,
          rows: resp.rows,
          userinfo: resp.rows[1],
          showtable: true,
          visible: true,

        });
      }
    });
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ users: response.data });
      });
  }

  render() {
    //console.log(this.state.users);
    const users = this.state.users.map(user => {
      return <Users
        userinfo={this.state.userinfo}  
        id={user.id}
        name={user.name}
        email={user.email}
        phone={user.phone}
        website={user.website}
        username={user.username}
        //address={user.address}
        city={user.address.city}
        street={user.address.street}
        suite={user.address.suite}
        zipcode={user.address.zipcode}
        geolat={user.address.geo.lat}
        geolang={user.address.geo.lang}
        companyname={user.company.name}
        companycatchPhrase={user.company.catchPhrase}
        companybs={user.company.bs}
        deluser={this.deluser}
        updateUserArr={this.updateUserArr}
      />
    });
    const dataset = this.state.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
        username: user.username,
        //address={user.address}
        city: user.address.city,
        street: user.address.street,
        suite: user.address.suite,
        zipcode: user.address.zipcode,
        geolat: user.address.geo.lat,
        geolang: user.address.geo.lang,
        companyname: user.company.name,
        companycatchPhrase: user.company.catchPhrase,
        companybs: user.company.bs
      }
    });

    return (
      <div>
        <ExcelFile element={<button>Download All Data</button>}>
          <ExcelSheet data={dataset} name="Users">
            <ExcelColumn label="ID" value="id" />
            <ExcelColumn label="Name" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="username" value="username" />
            <ExcelColumn label="Website" value="website" />
            <ExcelColumn label="City" value="city" />
            <ExcelColumn label="Street" value="street" />
            <ExcelColumn label="Suite" value="suite" />
            <ExcelColumn label="Phone" value="phone" />
            <ExcelColumn label="CompanyName" value="companyname" />
            <ExcelColumn label="CompanyCatchPhrase" value="companycatchPhrase" />
          </ExcelSheet>
        </ExcelFile>
        <input type="file" onChange={this.fileHandler.bind(this)} style={{ "padding": "10px" }} />
        <div style={{ overflow: 'scroll' }}>
           {/* {
            (this.state.showtable === true && this.state.rows.length === 2) ?
            //this.state.userinfo.map(user => {
            <Users
            // rows={this.state.rows} 
            // id={this.state.userinfo.id}
            // name={this.state.userinfo.name}
            // email={this.state.userinfo.email}
            // phone={this.state.userinfo.phone}
            // website={this.state.userinfo.website}
            // username={this.state.userinfo.username}
            // //address={user.address}
            // city={this.state.userinfo.city}
            // street={this.state.userinfo.street}
            // suite={this.state.userinfo.suite}
            // zipcode={this.state.userinfo.zipcode}
            // // geolat={user.geo.lat}
            // // geolang={user.geo.lang}
            // companyname={this.state.userinfo.companyname}
            // companycatchPhrase={this.state.userinfo.companycatchPhrase}
            // companybs={this.state.userinfo.companybs}
            /> : null
           }  */}
          {this.state.showtable === true ?
            <Modal
              title="Users Details"
              visible={this.state.visible}
              onOk={this.handleOk}
              width={1200}
              footer={[
                <Button onClick={this.handleOk}>
                  OK
              </Button>,
              ]}
            >
              <OutTable data={this.state.rows} columns={this.state.cols}
                tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />
            </Modal> : null}
          
        </div>
        <section className="Infos">
          {users}
        </section>
      </div>
    );
  }
}

export default Info;