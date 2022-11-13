import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import HomePage from "./home.page";
import "@testing-library/jest-dom";
import { appStore } from "../../../infrastructure/app/redux-toolkit/store";
import { Provider } from "react-redux";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <HomePage />
                    </Provider>
                </Router>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/Inicio/i);
            expect(element).toBeInTheDocument();
        });
    });
});
