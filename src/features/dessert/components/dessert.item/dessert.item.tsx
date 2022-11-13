import { Dessert } from "../../types/dessert";

export function DessertItem({ item }: { item: Dessert }) {
    return (
        <>
            <p>{item.title}</p>
            <img src={item.img} alt={"Image of" + item.title} height="200" />
            <p>{item.price}</p>
        </>
    );
}
