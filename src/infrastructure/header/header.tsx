import { Menu } from "../menu/menu";

export function Header() {
    const title = "Che Mate🧉";
    return (
        <header>
            <h1>{title}</h1>
            <Menu></Menu>
        </header>
    );
}
