import { AppRoutes } from "../app.routes/app.routes";
import { Layout } from "../layout/layout";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </div>
    );
}

export default App;
