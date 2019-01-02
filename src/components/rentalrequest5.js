import React, { Component } from 'react';
import './rentalrequest.css';

class Rentalrequest5 extends Component {
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
           </div>
           <div className="row" style={{marginTop: '110px', marginLeft: '180px', marginRight: '10px', border: '1px solid grey', width: '82%', paddingTop: '5px', paddingLeft: '5px', paddingBottom: '10px', borderRadius: '6px', backgroundColor: '#eef1f6'}} >
             <div style={{marginTop: '10px', textAlign: 'left'}} className="col-md-4">
               Equiment Name:<br />
               <img style={{width: '350px', border: '1px solid #333333', marginTop: '20px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XnwBcudXZZkT2wvqh1EKcRd0vvaPfUYEnr9P0mp0X-2yEM1t" />
             </div>
             <div style={{marginTop: '30px', textAlign: 'left'}} className="col-md-2">
               Category:<br /><br />
               Subcategory:<br /><br />
               Manufacturer:<br /><br />
               Model:<br /><br />
               Value:<br /><br />
               Capacity Per Hour:<br /><br />
               Engine Power:<br /><br />
               Weight:<br /><br />
               Capacity:<br /><br />
               Bucket Capacity:<br /><br />
             </div>
             <div style={{marginTop: '30px', textAlign: 'left'}} className="col-md-2">
               Earth Moving Equipments<br /><br />
               xxxxxxxx<br /><br />
               xxxxxxxx<br /><br />
               xxxxxxxx<br /><br />
               xxxxxxxx<br /><br />
               xxxxxxxx<br /><br />
               xxxxxxxx<br /><br />
               xxxxxxxx<br /><br />
               xxxxxxxx<br /><br />
               xxxxxxxx<br /><br />
             </div>
             <div style={{marginTop: '30px', textAlign: 'right'}} className="col-md-1">
               Rates:
             </div>
             <div style={{marginTop: '30px', textAlign: 'left'}} className="col-md-1">
               Hourly:<br /><br />
               Daily:<br /><br />
               Weekly:<br /><br />
               Monthly:<br /><br />
             </div>
             <div style={{marginTop: '30px', textAlign: 'left'}} className="col-md-1">
               xxxx-xxxx<br /><br />
               xxxx-xxxx<br /><br />
               xxxx-xxxx<br /><br />
               xxxx-xxxx<br /><br />
             </div>
           </div>
           <div className="row" style={{marginTop: '580px', marginLeft: '180px', marginRight: '10px', border: '1px solid grey', width: '82%', paddingTop: '5px', paddingLeft: '5px', paddingBottom: '10px', borderRadius: '6px', backgroundColor: '#eef1f6'}} >
             <div style={{marginTop: '10px', textAlign: 'left'}} className="col-md-4">
               Borrow Request:
             </div>
           </div>
         </div>
       </div>
     );
   }
 }

 export default Rentalrequest5;
