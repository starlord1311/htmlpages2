import React, { Component } from 'react';
import './amsmap.css';

class Amsmap extends Component {
  render() {
    return (
      <div>
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Equipshare</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-user" />William Stryker</a></li>
      </ul>
    </div>
  </nav>
  <div className="sidenav">
    <a href="dashboard.html">Dashboard</a>
    <a href="#services">Location</a>
    <a href="#clients">Companies</a>
    <a href="#contact">Equipment Master</a>
    <a href="#about">Equipment Categories</a>
    <a href="#services">Agent</a>
    <a href="#clients">Wallet</a>
    <a href="#contact">Rental Request</a>
    <a href="#contact">Reports</a>
  </div>
  <div style={{textAlign: 'right', marginTop: '150px'}}>
    <button className="btn"><span className="glyphicon glyphicon-info-sign" /></button><br />
    <button className="btn"><span className="glyphicon glyphicon-bell" /></button><br />
    <button className="btn"><span className="glyphicon glyphicon-map-marker" /></button><br />
    <button className="btn"><span className="glyphicon glyphicon-time" /></button><br />
  </div>
  <div className="container-fluid">
    <div className="row" style={{marginTop: '50px', marginLeft: '180px', marginRight: '10px'}}>
      <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Asset Management System</strong></h4>
      <div style={{marginTop: '10px'}} className="col-md-4">
        <div>
          <div style={{marginBottom: '10px'}}> <a href className="btn1">GPS Data</a><br /><br />
          </div>
        </div>
      </div>
      <div style={{marginTop: '10px', textAlign: 'center'}} className="col-md-4">
        <div>
          <div style={{marginBottom: '10px', marginLeft: '-70px'}}> <a href className="btn1">Fuel Card</a><br /><br />
          </div>
        </div>
      </div>
      <div style={{marginTop: '10px', textAlign: 'right'}} className="col-md-4">
        <div>
          <div style={{marginBottom: '10px', marginRight: '70px'}}>  <a href className="btn1">OBD-II Data</a><br /><br />
          </div>
        </div>
      </div>
    </div>
    <div className="row" style={{marginTop: '220px', marginLeft: '180px', marginRight: '10px', width: '82%', height: '0.1%'}}>
      <div id="map" />
      {/*Load the API from the specified URL
* The async attribute allows the browser to render the page while the API loads
* The key parameter will contain your own API key (which is not needed for this tutorial)
* The callback parameter executes the initMap() function
*/}
    </div>
  </div>
</div>
);
}
}

export default Amsmap;
