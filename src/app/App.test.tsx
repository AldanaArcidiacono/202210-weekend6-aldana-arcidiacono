import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { appStore } from "./redux-toolkit/store";

test("renders learn react link", () => {
    render(
        <Provider store={appStore}>
            <App />
        </Provider>
    );

    expect(screen.getByText(/probando/i)).toBeInTheDocument();
});
