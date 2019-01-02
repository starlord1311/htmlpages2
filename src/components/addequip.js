import React, { Component } from 'react';
import './addequip.css';

class Addequip extends Component {
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
        <div className="row" style={{marginTop: '5px', marginLeft: '165px', marginRight: '10px'}}>
          <div className="col-md-4">
            <div className="dropdown" style={{marginTop: '100px'}}>Category:
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Category
                <span className="caret" /></button>
              <ul className="dropdown-menu">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row" style={{marginTop: '50px', marginLeft: '180px', marginRight: '10px'}}>
            <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Add Equipment</strong></h4>
          </div>
          <div className="row" style={{marginTop: '330px', marginLeft: '165px', marginRight: '10px', border: '2px solid grey', borderRadius: '3px'}}>
            <h5 className="head"> &nbsp;Asset Brief</h5>
            <div className="col-md-6">
              <div>
                <form action="/action_page.php">
                  Equipment Name:
                  <input type="text" name style={{border: '2px solid grey', borderRadius: '3px', width: '325px', marginLeft: '20px', marginTop: '25px'}} />
                  <br /><br />
                  Year:
                  <input type="text" name style={{border: '2px solid grey', borderRadius: '3px', width: '325px', marginLeft: '100px'}} />
                  <br /><br />
                  Company Asset No.:
                  <input type="text" name style={{border: '2px solid grey', borderRadius: '3px', width: '325px', marginLeft: '3px'}} /><br /><br />
                  IOD ID:
                  <input type="text" name style={{border: '2px solid grey', borderRadius: '3px', width: '325px', marginLeft: '83px'}} /><br /><br />
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <form action="/action_page.php">
                  Equipment Serial No.:
                  <input type="Location" name style={{border: '2px solid grey', borderRadius: '3px', width: '325px', marginTop: '35px'}} />
                  <br /><br />
                  Hours of operation:
                  <input type="text" name style={{border: '2px solid grey', borderRadius: '3px', width: '325px', marginLeft: '20px'}} /><br /><br />
                  <div style={{marginLeft: '60px', marginTop: '0px'}} className="container">
                    <label htmlFor="pwd">Asset:</label>
                    <label className="radio-inline">
                      <input type="radio" name="optradio" defaultChecked />Owned
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="optradio" />Leased
                    </label>
                    <label className="radio-inline">
                      <input type="radio" name="optradio" />Rented
                    </label>
                  </div></form>
                <div style={{marginLeft: '-48px', marginTop: '10px'}} className="container">
                  Equivalent Profile Photo: <input style={{marginLeft: '172px', marginTop: '-22px'}} type="file" id="myFile" />
                </div>
                <a href="#" className="btn btn-info" style={{marginLeft: '-90px', marginTop: '30px', marginBottom: '5px'}} role="button">Next</a>
              </div>
            </div>
          </div>
          <br /><br />
        </div></div>
    );
  }
}

export default Addequip;
