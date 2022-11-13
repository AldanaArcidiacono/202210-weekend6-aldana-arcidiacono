import { DessertList } from "../../dessert/components/dessert.list/dessert.list";
import { useDessert } from "../../dessert/hooks/usedessert";
import { MateList } from "../../mates/components/mates.list/mates.list";
import { useMate } from "../../mates/hooks/usemate";

function HomePage() {
    const { mates } = useMate();
    const { desserts } = useDessert();

    return (
        <main>
            <h2>Inicio🧉</h2>
            <MateList item={mates}></MateList>
            <DessertList item={desserts}></DessertList>
        </main>
    );
}

export default HomePage;
