//import React,{ Component } from 'react';
import React from "react";
import ReactExport from "react-data-export";


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




const dataset = this.props.users.map(user =>{
    return {
        id : user.id,
        name: user.name,
        email: user.email,
        phone : user.phone,
        website: user.website,
        username: user.username,
        //address={user.address}
        city : user.address.city,
        street: user.address.street,
        suite : user.address.suite,
        zipcode:user.address.zipcode,
        geolat: user.address.geo.lat,
        geolang: user.address.geo.lang,
        companyname: user.company.name,
        companycatchPhrase: user.company.catchPhrase,
        companybs:user.company.bs
    }
});


class Download extends React.Component{
    render() {
        return (
            <ExcelFile element={<button>Download Data</button>}>
            <ExcelSheet data={dataset} name="Users">
                <ExcelColumn label="Name" value="name"/>
                <ExcelColumn label="Email" value="email"/>
                <ExcelColumn label="username" value="username"/>
                <ExcelColumn label="Website" value="website" />
                <ExcelColumn label="City" value="city"/>
                <ExcelColumn label="Street" value="street"/>
                <ExcelColumn label="Suite" value="suite"/>
                <ExcelColumn label="Phone" value="phone"/>
                <ExcelColumn label="CompanyName" value="companyname"/>
                <ExcelColumn label="CompanyName" value="companycatchPhrase"/>
            </ExcelSheet>
        </ExcelFile>
        );
    }
}
