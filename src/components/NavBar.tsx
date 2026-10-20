import { NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (

        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Inicio</NavLink>
                </li>

                <li>
                    <NavLink to={"/alumnos"}>Alumnos</NavLink>
                </li>
            </ul>
        </nav>

    )
}