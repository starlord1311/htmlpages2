import React, { Component } from 'react';
import './smsuser.css';

class Smsuser extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div style={{backgroundColor: '#0c7cb3'}} className="container-fluid">
                <div className="navbar-header">
                  <a style={{color: 'white'}} className="navbar-brand" href="#">Equipshare</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li><a style={{color: 'white'}} className="dropdown-toggle" data-toggle="dropdown" href="#"><span style={{marginRight: '5px', color: 'white'}} className="glyphicon glyphicon-user" />William Stryker</a>
                    <ul className="dropdown-menu">
                      <li><a style={{borderBottom: '1px solid grey'}} href="#">Manage Profile</a></li>
                      <li><a href="#">Log Out</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="sidenav">
              <ul>
                <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-th-list" />AMC</li>
                <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-info-sign" />Service Request</li>
                <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-info-sign" />Resolved History</li>
                <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-info-sign" />Breakdown Complaint</li>
              </ul>
            </div>
            <div style={{textAlign: 'right', marginTop: '150px'}}>
              <button className="btn"><span className="glyphicon glyphicon-info-sign" /></button><br />
              <button className="btn"><span className="glyphicon glyphicon-bell" /></button><br />
              <button className="btn"><span className="glyphicon glyphicon-map-marker" /></button><br />
              <button className="btn"><span className="glyphicon glyphicon-time" /></button><br />
            </div>
          </div>
        );
      }
    }

    export default Smsuser;
