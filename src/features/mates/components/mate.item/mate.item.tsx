import { Mate } from "../../types/mate";

export function MateItem({ item }: { item: Mate }) {
    return (
        <>
            <p>{item.title}</p>
            <img src={item.img} alt={"Image of" + item.title} height="200" />
            <p>{item.price}</p>
        </>
    );
}
