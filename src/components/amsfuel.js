import React, { Component } from 'react';
import './amsfuel.css';

class Amsfuel extends Component {
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
                <div style={{marginBottom: '10px'}}> <a href className="btn1">GPS Data</a><br /><br /> <br /> Oil Issued:
                </div>
              </div>
            </div>
            <div style={{marginTop: '10px', textAlign: 'center'}} className="col-md-4">
              <div>
                <div style={{marginBottom: '10px', marginLeft: '-70px'}}> <a href className="btn1">Fuel Card</a><br /><br /><br />
                  <form action="/action_page.php">
                    Date:
                    <input type="date" name style={{border: '2px solid grey', borderRadius: '3px'}} />
                    to
                    <input type="date" name style={{border: '2px solid grey', borderRadius: '3px'}} />
                  </form>
                </div>
              </div>
            </div>
            <div style={{marginTop: '10px', textAlign: 'right'}} className="col-md-4">
              <div>
                <div style={{marginBottom: '10px', marginRight: '70px'}}>  <a href className="btn1">OBD-II Data</a><br /><br /><br />
                  <button style={{backgroundColor: '#0c7cb3'}} className="btn1">Get Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: '220px', marginLeft: '180px', marginRight: '10px', width: '82%', height: '0.1%'}}>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Last Issue On</th>
                  <th>Level</th>
                  <th>New Fuel Issue</th>
                  <th>Type of Fuel</th>
                  <th>Fuel Rate</th>
                </tr>
              </thead>
            </table>
          </div>
          <div style={{marginTop: '450px', marginLeft: '180px', border: '1px solid grey', width: '82%', paddingTop: '15px', paddingLeft: '15px', borderRadius: '6px', backgroundColor: '#eef1f6'}} className="row">
            <h4 style={{marginTop: '-3px'}}>New Issue:</h4>
            <div className="col-md-6">
              <form action="/action_page.php">
                Fuel Type:
                <div className="form-group">
                  <select style={{width: '300px', height: '27px', marginTop: '-20px', marginLeft: '80px'}} className="form-control" id="sel1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                Issue Date:
                <div className="form-group">
                  <select style={{width: '300px', height: '27px', marginTop: '-20px', marginLeft: '80px'}} className="form-control" id="sel1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
                Fuel Rate: <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '300px', marginLeft: '12px'}} />
                <br /><br />
              </form>
            </div>
            <div className="col-md-6">
              <form action="/action_page.php">
                Current Level:
                <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '40px'}} />
                <br /><br />
                New Issue Amount: <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '8px'}} />
                <br /><br />
                Invoice Number: <input type="text" name style={{border: '1px solid grey', borderRadius: '3px', width: '325px', marginLeft: '30px'}} />
                <br /><br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Amsfuel;
