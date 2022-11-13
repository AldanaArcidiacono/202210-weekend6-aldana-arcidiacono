import { Link } from "react-router-dom";

export function Menu() {
    const menuOptions = [
        { id: "1", path: "home", label: "Inicio" },
        { id: "2", path: "mate", label: "Mates" },
        { id: "3", path: "dessert", label: "Postres" },
        { id: "4", path: "sale", label: "Ofertas" },
    ];
    return (
        <nav>
            <ul>
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
