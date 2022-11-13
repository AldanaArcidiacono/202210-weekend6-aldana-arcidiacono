import { Mate } from "../../types/mate";

export function MateItem({ item }: { item: Mate }) {
    return (
        <>
            <p>{item.title}</p>
            <img src={item.img} alt={"Image of" + item.title} />
            <p>{item.price}</p>
        </>
    );
}
