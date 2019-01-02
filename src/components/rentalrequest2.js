import React, { Component } from 'react';
import './rentalrequest.css';

class Rentalrequest2 extends Component {
  render() {
    return (
      <div>
              <nav className="navbar navbar-inverse navbar-fixed-top">
                <div style={{backgroundColor: '#0c7cb3'}} className="container-fluid">
                  <div className="navbar-header">
                    <a style={{color: 'white'}} className="navbar-brand" href="#">Equipshare</a>
                  </div>
                  <ul className="nav navbar-nav navbar-right">
                    <li><button style={{color: 'white', backgroundColor: '#0c7cb3', border: '1px solid white', paddingLeft: '5px', marginTop: '12px', paddingTop: '3px', marginRight: '40px'}} className="dropdown-toggle" data-toggle="dropdown">
                        <span style={{marginRight: '5px', color: 'white'}} className="glyphicon glyphicon-th-large" />
                      </button>
                      <ul className="dropdown-menu" style={{width: '550px', textAlign: 'center', backgroundColor: '#eef1f6'}}>
                        <li><button style={{marginLeft: '5px'}} className="btn"><span className="glyphicon glyphicon-info-sign" /><br />Auction</button>
                          <button className="btn"><span className="glyphicon glyphicon-info-sign" /><br />Buy &amp; Sells</button>
                          <button className="btn"><span className="glyphicon glyphicon-info-sign" /><br />E-Commerce</button>
                          <button className="btn"><span className="glyphicon glyphicon-info-sign" /><br />SMS</button>
                          <button className="btn"><span className="glyphicon glyphicon-info-sign" /><br />Call Off</button>
                        </li>
                      </ul>
                    </li>
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
                  <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-th-list" />Companies
                    <ul>
                      <li>Rental Contractor</li>
                      <li>OEM Banks</li>
                      <li>Suppliers</li>
                      <li>Mechanics</li>
                    </ul>
                  </li>
                  <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-info-sign" />Site
                    <ul>
                      <li>View</li>
                      <li>create</li>
                    </ul>
                  </li>
                  <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-map-marker" />Equipment
                    <ul>
                      <li>View</li>
                      <li>Create</li>
                    </ul>
                  </li>
                  <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-list-alt" />User
                    <ul>
                      <li>View</li>
                      <li>Create</li>
                    </ul>
                  </li>
                  <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-th-list" />Rental Request
                    <ul>
                      <li>Request </li>
                      <li>Confirmation</li>
                    </ul>
                  </li>
                  <li><span style={{marginRight: '3px'}} className="glyphicon glyphicon-user" />Invoice</li>
                </ul>
              </div>
              <div className="container-fluid">
                <div className="row" style={{marginTop: '60px', marginLeft: '180px', marginRight: '10px'}}>
                  <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Rent Now</strong></h4>
                  <div style={{marginTop: '10px', textAlign: 'left'}} className="col-md-4">
                    <form action="/action_page.php">
                      Select Project:
                      <div className="form-group">
                        <select style={{width: '225px', height: '27px', marginTop: '-25px', marginLeft: '100px'}} className="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div style={{marginTop: '10px', textAlign: 'left'}} className="col-md-3">
                    <form action="/action_page.php">
                      City:
                      <div className="form-group">
                        <select style={{width: '225px', height: '27px', marginTop: '-25px', marginLeft: '40px'}} className="form-control" id="sel1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div style={{marginTop: '5px', textAlign: 'left'}} className="col-md-3">
                    <div>
                      <div style={{marginBottom: '10px'}}> <button className="btn1" style={{backgroundColor: '#0c7cb3', borderRadius: '3px', border: 'none', color: 'white', padding: '5px 10px'}}>Get Details</button><br />
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginTop: '160px', marginLeft: '180px', marginRight: '10px'}}>
                    <h5 className="head" style={{borderBottom: '0.5px dashed #333333', paddingBottom: '5px'}}><strong>Categories</strong></h5>
                  </div>
                </div></div></div>
          );
        }
      }

      export default Rentalrequest2;
