    import CartWidget from "./CartWidget";
    import logo from "../assets/logo.jpeg";
    import { Link } from "react-router-dom";
    
    const NavBar = ({}) => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"></img>
                <span>andromeda</span>
            </div>
            <nav className="navbar">
                <ul className="ul">
                    <li className="li"><Link to="/">Home</Link></li>
                    <li className="li"><Link to={`/items/:id`}>Productos</Link></li>
                    <li className="li"><Link to="/contacto">Contacto</Link></li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
        </header>
    )
}

export default NavBar;