import { MateList } from "../components/mates.list/mates.list";
import { useMate } from "../hooks/usemate";

function MatePage() {
    const { mates } = useMate();

    return (
        <main>
            <h2>Sección de Mates</h2>
            <MateList item={mates}></MateList>
        </main>
    );
}

export default MatePage;
