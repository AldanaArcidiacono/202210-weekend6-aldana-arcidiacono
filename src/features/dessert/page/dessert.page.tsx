import { DessertList } from "../components/dessert.list/dessert.list";
import { useDessert } from "../hooks/usedessert";

function DessertPage() {
    const { desserts } = useDessert();
    return (
        <main>
            <h2>Sección de Postres</h2>
            <DessertList item={desserts}></DessertList>
        </main>
    );
}

export default DessertPage;
