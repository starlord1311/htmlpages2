import React, { Component } from 'react';
import './addequip2.css';
class Addequip2 extends Component {
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
              <div className="container-fluid">
                <div className="row" style={{marginTop: '-10px', marginLeft: '-15px', marginRight: '10px'}}>
                  <h4 className="head" style={{borderBottom: '0.5px solid #333333', paddingBottom: '5px'}}><strong>Add Equipment</strong></h4>
                </div>
                <div className="dropdown" style={{marginTop: '10px'}}>Category:
                  <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Category
                    <span className="caret" /></button>
                  <ul className="dropdown-menu">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>
                <div className="row" style={{marginTop: '230px', marginLeft: '-10px', marginRight: '10px', border: '2px solid grey', borderRadius: '3px'}}>
                  <h5 className="head"> &nbsp;Dues and Documents</h5>
                  <div className="col-md-6">
                    <div>
                      <div className="container">
                        <form>
                          <label className="checkbox-inline" style={{marginLeft: '-15px'}}>
                            <input type="checkbox" defaultValue />RTO
                          </label>
                          <label className="checkbox-inline" style={{marginLeft: '170px'}}>
                            <input type="checkbox" defaultValue />PUC
                          </label>
                          <label className="checkbox-inline" style={{marginLeft: '170px'}}>
                            <input type="checkbox" defaultValue />Fitness
                          </label>
                          <label className="checkbox-inline" style={{marginLeft: '170px'}}>
                            <input type="checkbox" defaultValue />Third Party Insurance
                          </label>
                        </form>
                      </div>
                      <br /><br />
                      <div style={{marginLeft: '-15px', marginTop: '0px'}} className="container">
                        Upload Document: <input style={{marginLeft: '125px', marginTop: '-22px'}} type="file" id="myFile" />
                      </div><br /><br />
                      <div style={{marginLeft: '-15px', marginTop: '-20px', marginBottom: '15px'}} className="container">
                        Upload Document: <input style={{marginLeft: '125px', marginTop: '-22px'}} type="file" id="myFile" />
                      </div>
                      <div style={{marginLeft: '500px', marginBottom: '10px'}}>
                        <a href="#" className="btn btn-info" role="button">Submit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>
          );
        }
      }

    export default Addequip2;
