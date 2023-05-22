import './Navbar.scss';
import {Component} from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {NavItems} from './NavItems';
import Logo from "../../images/logo2.png"
import { Link } from 'react-router-dom';



class Navbar extends Component{
    state = {clicked:false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='NavbarLogo'><img src={Logo}></img></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {NavItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>
        )
    }
}

export default Navbar;