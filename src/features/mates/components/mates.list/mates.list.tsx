import { Mate } from "../../types/mate";
import { MateItem } from "../mate.item/mate.item";

export function MateList({ item }: { item: Mate[] }) {
    return (
        <div>
            <ul>
                {item.map((item: Mate) => (
                    <li key={item.id}>
                        <MateItem item={item}></MateItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
