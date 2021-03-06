import React, { Component } from 'react';
import IPAddress from './ip-address';

let xhr;

class IpAddressContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "..."

        }

        this.processRequest = this.processRequest.bind(this);
    }

   componentDidMount() {
    xhr = new XMLHttpRequest();
    xhr.open("Get", "https://ipinfo.io/json", true);
    xhr.send();

    xhr.addEventListener("readystatechange", this.processRequest, false);
   }

   processRequest() {
       if (xhr.readyState === 4 && xhr.status === 200) {
       let response = JSON.parse(xhr.responseText);
       this.setState({
           ip_address: response.ip
      
       });
       
    }

  
   }

   

    render() {
        
        return (
            <IPAddress ip={this.state.ip_address} />
        )
    }
}

export default IpAddressContainer;