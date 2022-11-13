import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { appStore } from "./redux-toolkit/store";
import { MemoryRouter as Router } from "react-router-dom";

test("renders learn react link", () => {
    render(
        <Router>
            <Provider store={appStore}>
                <App />
            </Provider>
        </Router>
    );

    expect(screen.getByText(/Arcidiacono/i)).toBeInTheDocument();
});
