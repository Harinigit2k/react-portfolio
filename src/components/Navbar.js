import "./NavbarStyle.css";
import {Component} from "react";
import {MenuItems} from "./MenuItems";
import {Link} from "react-router-dom"


class Navbar extends Component{
  
  state = {clicked:false};
  handleClicked =() =>{
      this.setState({clicked:!this.state.clicked})
  }
    render(){
        return(
          <nav className="NavbarItems" >
            <h1 className="navbar-logo">Travels</h1>
            
            <div className="menu-icons" onClick={this.handleClicked}>
               
               <i className={this.state.clicked? "fas fa-times" : "fas fa-bars"}></i>
              
           </div>
            
            <ul className= {this.state.clicked? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item,index) => {
                    return(
                        <li key={index}>
                          <a className={item.cName}  href={item.urls}>
                              <i className={item.icon}> </i>   
                              {item.title}                        

                            </a>

                        </li>

                    );
                })}
               
                
            </ul>
          
          
          </nav>
        );
    }
  
}

export default Navbar;
