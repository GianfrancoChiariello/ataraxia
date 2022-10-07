    import CartWidget from "./CartWidget";
    import logo from "../assets/logo.jpeg";
    import { Link } from "react-router-dom";
    
    const NavBar = ({}) => {
    return (
        <header>
            <Link to={"/"}><div className="logo"><img src={logo} alt="logo"></img><span>andromeda</span></div></Link>
            
            <nav className="navbar">
                <ul className="ul">
                    <li className="li"><Link to={"/categorias/deportivo"}>Deportivo</Link></li>
                    <li className="li"><Link to={"/categorias/running"}>Running</Link></li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
        </header>
    )
}

export default NavBar;