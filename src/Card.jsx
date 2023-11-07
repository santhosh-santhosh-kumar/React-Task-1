import React from 'react';
import './App.css';
function Card(props){
    if(props.head=='FREE'){
       var num=props.attr
       var icon=<i class="fas fa-check"></i>
       var wrong=<i className="fas fa-times"></i>
       console.log(num)
    }else if(props.head=='PLUS'){
        var num=props.attr
       var icon=<i class="fas fa-check"></i>
       var wrong=<i class="fas fa-check"></i>
    }else{
        var num=props.attr
       var icon=<i class="fas fa-check"></i>
       var wrong=<i class="fas fa-check"></i>
    }
    console.log(props.st)
    return(
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.head}</h5>
                <h6 className="card-price text-center">${props.value}<span>/month</span></h6>
                <hr />
                <ul class="fa-ul">
                  <li><span className="fa-li">{icon}</span>Single User</li>
                  <li><span className="fa-li">{icon}</span>5GB Storage</li>
                  <li><span className="fa-li">{icon}</span>Unlimited Public Projects</li>
                  <li><span className="fa-li">{icon}</span>Community Access</li>
                  <li className={num}><span className="fa-li">{wrong}</span>Unlimited
                    Private Projects</li>
                  <li className={num}><span class="fa-li">{wrong}</span>Dedicated
                    Phone Support</li>
                  <li className={num}><span className="fa-li">{wrong}</span>Free Subdomain
                  </li>
                  <li className={num} style={props.st}><span className="fa-li">{props.icon}</span><span className="fa-li" style={props.st1}>{wrong}</span>
                  Monthly Status
                    Reports</li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
                
              </div>
            </div>
          </div>
    );
}
export default Card