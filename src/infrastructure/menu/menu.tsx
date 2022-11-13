import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export function Menu() {
    const menuOptions = [
        { id: "1", path: "home", label: "Inicio" },
        { id: "2", path: "mate", label: "Mates" },
        { id: "3", path: "dessert", label: "Postres" },
        { id: "4", path: "sale", label: "Ofertas" },
    ];
    return (
        <nav>
            <ul className={styles.menu__ul}>
                {menuOptions.map((item) => (
                    <li key={item.id} className={styles.menu__list}>
                        <Link to={item.path} className={styles.menu__nav}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
