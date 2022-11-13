import { Dessert } from "../../types/dessert";
import { DessertItem } from "../dessert.item/dessert.item";

export function DessertList({ item }: { item: Dessert[] }) {
    return (
        <>
            <ul>
                {item.map((item: Dessert) => (
                    <li key={item.id}>
                        <DessertItem item={item}></DessertItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
