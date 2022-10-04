import { Outlet, Link,NavLink } from "react-router-dom";
import './App.css';

const Layout = () => {

    return (
    <div>
    <h1>Simple SPA</h1>
        <div class="navbar">
            <a >
                <NavLink to="/">Home</NavLink>    
                
            </a>
            <a >
                <NavLink to="/stuff" >Stuff</NavLink>
            </a>
            <a >
                <NavLink to="/contact">Contact</NavLink>
            </a>
        </div>
      <Outlet />
    </div>
  );
}

export default Layout;